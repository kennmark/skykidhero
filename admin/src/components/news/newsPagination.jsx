export default function NewsPagination({
  meta,
  onPageChange,
}) {
  if (
    !meta ||
    meta.totalPages <= 1
  ) {
    return null;
  }

  const hasPreviousPage =
    meta.hasPreviousPage ??
    meta.page > 1;

  const hasNextPage =
    meta.hasNextPage ??
    meta.page < meta.totalPages;

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-500">
        Page {meta.page} of{" "}
        {meta.totalPages}
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          disabled={
            !hasPreviousPage
          }
          onClick={() =>
            onPageChange(
              meta.page - 1
            )
          }
          className="cursor-pointer rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <button
          type="button"
          disabled={!hasNextPage}
          onClick={() =>
            onPageChange(
              meta.page + 1
            )
          }
          className="cursor-pointer rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}