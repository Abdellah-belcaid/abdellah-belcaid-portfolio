function Tag({ tag, onClick, isSelected }) {
  const buttonStyle = isSelected
    ? "border-purple-500"
    : "border-slate-600 hover:border-white dark:hover:border-white ";
  return (
    <button
      className={`rounded-full border-2 px-5 py-1 text-xl cursor-pointer ${buttonStyle}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default Tag;
