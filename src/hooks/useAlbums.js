import { useEffect, useState } from "react";

import {
  fetchAlbums,
  createAlbum,
  updateAlbum,
  removeAlbum,
} from "../services/albumApi";

function useAlbums() {
  // Stores all albums
  const [albums, setAlbums] = useState([]);

  // Stores form input value
  const [title, setTitle] = useState("");

  // Stores currently editing album
  const [editingAlbum, setEditingAlbum] = useState(null);

  // Handles loading state for
  // create and update operations
  const [loading, setLoading] = useState(false);

  // Fetch albums on initial render
  useEffect(() => {
    getAlbums();
  }, []);

  // Fetch albums from API
  const getAlbums = async () => {
    try {
      const response = await fetchAlbums();

      // Limiting albums for UI display
      setAlbums(response.data.slice(0, 12));
    } catch (error) {
      console.log(error);
    }
  };

  // Reset form state
  const resetForm = () => {
    setTitle("");

    setEditingAlbum(null);
  };

  // Handle add and update album
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    // Prevent empty submission
    if (!trimmedTitle) return;

    try {
      setLoading(true);

      // UPDATE EXISTING ALBUM
      if (!!editingAlbum) {
        await updateAlbum(editingAlbum.id, {
          title: trimmedTitle,
          userId: 1,
        });

        // Update album locally in state
        setAlbums((prevAlbums) =>
          prevAlbums.map((album) =>
            album.id === editingAlbum.id
              ? {
                  ...album,
                  title: trimmedTitle,
                }
              : album,
          ),
        );

        setEditingAlbum(null);
      }

      // CREATE NEW ALBUM
      else {
        const response = await createAlbum({
          title: trimmedTitle,
          userId: 1,
        });

        // Add new album at top
        setAlbums((prevAlbums) => [response.data, ...prevAlbums]);
      }

      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Populate form for editing
  const handleEdit = (album) => {
    setTitle(album.title);

    setEditingAlbum(album);
  };

  // Delete album
  const handleDelete = async (id) => {
    try {
      const response = await removeAlbum(id);

      if (response.status === 200) {
        // Remove deleted album from state
        setAlbums((prevAlbums) =>
          prevAlbums.filter((album) => album.id !== id),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    albums,
    title,
    setTitle,
    editingAlbum,
    loading,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
}

export default useAlbums;
