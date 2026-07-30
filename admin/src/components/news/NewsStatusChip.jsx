export default function NewsStatusChip({ news }) {
  let label = "Draft";
  let className =
    "inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700";

  if (news.deletedAt) {
    label = "Deleted";
    className =
      "inline-flex rounded-full bg-red-100 px-3 py-1 text-sm text-red-700";
  } else if (news.published) {
    label = "Published";
    className =
      "inline-flex rounded-full bg-green-100 px-3 py-1 text-sm text-green-700";
  }

  return (
    <span className={className}>
      {label}
    </span>
  );
}