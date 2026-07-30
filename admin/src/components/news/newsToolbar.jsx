export default function NewsToolbar({
  search,
  onSearch,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <input
        type="text"
        value={search}
        placeholder="Search news..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-80 rounded-lg border px-4 py-2"
      />
    </div>
  );
}