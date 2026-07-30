export default function NewsPagination({
  meta,
  onPageChange,
}) {
  if (!meta) return null;

  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Showing page {meta.page} of {meta.totalPages}
      </p>

      <div className="space-x-2">
        <button
          disabled={meta.page === 1}
          onClick={() => onPageChange(meta.page - 1)}
          className="rounded border px-3 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <button
          disabled={meta.page >= meta.totalPages}
          onClick={() => onPageChange(meta.page + 1)}
          className="rounded border px-3 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}