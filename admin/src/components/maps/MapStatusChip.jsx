export default function MapStatusChip({
  published,
  deletedAt,
}) {
  if (deletedAt) {
    return (
      <span className="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
        Deleted
      </span>
    );
  }

  if (published) {
    return (
      <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
        Published
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
      Hidden
    </span>
  );
}