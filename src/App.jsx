import AlbumForm from "./components/albums/AlbumForm";
import AlbumList from "./components/albums/AlbumList";

// Custom hook containing all album-related business logic and state management
import useAlbums from "./hooks/useAlbums";

function App() {
  // Destructuring album states and handlers from custom hook
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
    // Main page container
    <div className="min-h-screen bg-[#f4f4f5]">
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Album Collection
          </h1>

          <p className="text-zinc-500 mt-2">Your album collection</p>
        </div>

        {/* Album Create / Update Form */}
        <AlbumForm
          title={title}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
          loading={loading}
          editingAlbum={editingAlbum}
        />

        {/* Albums Grid */}
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
