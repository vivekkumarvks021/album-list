import AlbumForm from "./components/albums/AlbumForm";
import AlbumList from "./components/albums/AlbumList";

import useAlbums from "./hooks/useAlbums";

function App() {
  const {
    albums,
    title,
    setTitle,
    loading,
    editingAlbum,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useAlbums();

  return (
    <div className="min-h-screen bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Album Collection
          </h1>

          <p className="text-zinc-500 mt-2">Your album collection</p>
        </div>

        <AlbumForm
          title={title}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
          loading={loading}
          editingAlbum={editingAlbum}
        />

        <AlbumList
          albums={albums}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
