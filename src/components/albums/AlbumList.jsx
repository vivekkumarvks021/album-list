import AlbumCard from "./AlbumCard";

function AlbumList({ albums, handleEdit, handleDelete }) {
  // Show fallback UI when no albums exist
  if (!albums.length) {
    return <p className="text-zinc-500">No albums found.</p>;
  }

  return (
    // Albums grid layout
    <div
      className="
        grid
        gap-6
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
      "
    >
      {/* Render album cards */}
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default AlbumList;
