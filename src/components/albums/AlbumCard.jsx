import { MdDelete, MdEdit } from "react-icons/md";

function AlbumCard({ album, handleEdit, handleDelete }) {
  return (
    <div className="group cursor-pointer">
      {/* Album Box */}
      <div
        className="
          aspect-square
          rounded-3xl
          bg-white
          overflow-hidden
          border
          border-zinc-200
          shadow-sm
          relative
        "
      >
        {/* Hover Actions */}
        <div
          className="
            absolute
            top-3
            right-3
            flex
            gap-2
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          {/* Edit */}
          <button
            onClick={() => handleEdit(album)}
            className="
              w-10
              h-10
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-blue-600
            "
          >
            <MdEdit size={20} />
          </button>

          {/* Delete */}
          <button
            onClick={() => handleDelete(album.id)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 "
          >
            <MdDelete size={20} />
          </button>
        </div>

        {/* Folder */}
        <div
          className="
            w-full
            h-full
            flex
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

      {/* Title */}
      <div className="mt-4 px-1">
        <h2
          className="
            text-[15px]
            font-semibold
            text-zinc-800
            capitalize
          "
        >
          {album.title}
        </h2>
      </div>
    </div>
  );
}

export default AlbumCard;
