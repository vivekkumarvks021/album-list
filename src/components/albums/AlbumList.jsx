import AlbumCard from "./AlbumCard";

function AlbumList({ albums, handleEdit, handleDelete }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-6
      "
    >
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
