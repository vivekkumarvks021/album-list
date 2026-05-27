import { useEffect, useState } from "react";

import {
  fetchAlbums,
  createAlbum,
  updateAlbum,
  removeAlbum,
} from "../services/albumApi";

function useAlbums() {
  const [albums, setAlbums] = useState([]);

  const [title, setTitle] = useState("");

  const [editingAlbum, setEditingAlbum] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      const response = await fetchAlbums();

      setAlbums(response.data.slice(0, 12));
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setTitle("");

    setEditingAlbum(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    try {
      setLoading(true);

      // UPDATE
      if (!!editingAlbum) {
        await updateAlbum(editingAlbum.id, {
          title: trimmedTitle,
          userId: 1,
        });

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

      // CREATE
      else {
        const response = await createAlbum({
          title: trimmedTitle,
          userId: 1,
        });

        setAlbums((prevAlbums) => [response.data, ...prevAlbums]);
      }

      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (album) => {
    setTitle(album.title);
    setEditingAlbum(album);
  };

  const handleDelete = async (id) => {
    try {
      const response = await removeAlbum(id);

      if (response.status === 200) {
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
