function AlbumForm({ title, setTitle, handleSubmit, isAdding, editingAlbum }) {
  const buttonText = isAdding
    ? editingAlbum
      ? "Updating..."
      : "Adding..."
    : editingAlbum
      ? "Update Album"
      : "Add Album";

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        items-center
        gap-4
        mb-10
      "
    >
      <input
        type="text"
        placeholder="Enter album title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          flex-1
          h-14
          px-5
          rounded-2xl
          border
          border-zinc-300
          bg-white
          outline-none
          focus:border-black
          transition
        "
      />

      <button
        type="submit"
        disabled={isAdding}
        className=" h-14 px-8 rounded-2xl bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AlbumForm;
