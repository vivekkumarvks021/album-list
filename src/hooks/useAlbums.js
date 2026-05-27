import { useEffect, useState } from "react";

import {
  fetchAlbums,
  createAlbum,
  updateAlbum,
  removeAlbum,
} from "../services/albumApi";

function useAlbums() {
  const [albums, setAlbums] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [editingAlbum, setEditingAlbum] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      setIsAdding(true);

      // UPDATE
      if (editingAlbum) {
        await updateAlbum(editingAlbum.id, {
          title,
          userId: 1,
        });

        const updatedAlbums = albums.map((album) => {
          if (album.id === editingAlbum.id) {
            return {
              ...album,
              title,
            };
          }

          return album;
        });

        setAlbums(updatedAlbums);

        setEditingAlbum(null);
      }

      // CREATE
      else {
        const response = await createAlbum({
          title,
          userId: 1,
        });

        setAlbums([response.data, ...albums]);
      }

      setTitle("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
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
        const updatedAlbums = albums.filter((album) => album.id !== id);

        setAlbums(updatedAlbums);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    albums,
    title,
    setTitle,
    isAdding,
    editingAlbum,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
}

export default useAlbums;
