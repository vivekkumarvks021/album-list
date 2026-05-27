function AlbumForm({ title, setTitle, handleSubmit, loading, editingAlbum }) {
  const isEditing = Boolean(editingAlbum);
  let buttonText = "Add Album";

  if (loading && isEditing) {
    buttonText = "Updating...";
  } else if (loading) {
    buttonText = "Adding...";
  } else if (isEditing) {
    buttonText = "Update Album";
  }

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
        disabled={loading}
        className=" h-14 px-8 rounded-2xl bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AlbumForm;
