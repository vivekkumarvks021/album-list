import { MdDelete, MdEdit } from "react-icons/md";

function AlbumCard({ album, handleEdit, handleDelete }) {
  // Shared styles for action buttons
  const actionButtonClass = `
    w-10
    h-10
    rounded-full
    bg-white
    shadow-md
    flex
    items-center
    justify-center
    transition
    hover:scale-105
  `;

  return (
    // Parent wrapper for hover interaction
    <div className="group cursor-pointer">
      {/* Album Card */}
      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-3xl
          border
          border-zinc-200
          bg-white
          shadow-sm
        "
      >
        {/* Action Buttons */}
        <div
          className="
            absolute
            top-3
            right-3
            z-10
            flex
            gap-2
            opacity-0
            transition-opacity
            group-hover:opacity-100
          "
        >
          {/* Edit Button */}
          <button
            onClick={() => handleEdit(album)}
            className={`${actionButtonClass} text-blue-600`}
          >
            <MdEdit size={20} />
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(album.id)}
            className={`${actionButtonClass} text-red-500`}
          >
            <MdDelete size={20} />
          </button>
        </div>

        {/* Album Thumbnail */}
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-gradient-to-br
            from-zinc-100
            to-zinc-200
            text-7xl
          "
        >
          📁
        </div>
      </div>

      {/* Album Title */}
      <div className="mt-4 px-1">
        <h2
          className="
            text-[15px]
            font-semibold
            capitalize
            text-zinc-800
          "
        >
          {album.title}
        </h2>
      </div>
    </div>
  );
}

export default AlbumCard;
