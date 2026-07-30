import { useEffect } from "react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function DeleteNewsModal({
  open,
  news,
  deleting = false,
  onCancel,
  onConfirm,
}) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (
        event.key === "Escape" &&
        !deleting
      ) {
        onCancel();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [open, deleting, onCancel]);

  if (!open || !news) {
    return null;
  }

  function handleBackdropClick() {
    if (!deleting) {
      onCancel();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
      onMouseDown={
        handleBackdropClick
      }
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-news-title"
        aria-describedby="delete-news-description"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        className="w-full max-w-md rounded-xl bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h2
                id="delete-news-title"
                className="text-lg font-semibold text-gray-900"
              >
                Delete News Article?
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                This article will be moved
                to deleted items.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancel}
            disabled={deleting}
            aria-label="Close delete warning"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5">
          <p
            id="delete-news-description"
            className="text-sm text-gray-600"
          >
            Are you sure you want to
            delete:
          </p>

          <div className="mt-3 rounded-lg border border-red-100 bg-red-50 p-4">
            <p className="font-medium text-gray-900">
              {news.title}
            </p>

            <p className="mt-1 break-all text-sm text-gray-500">
              {news.slug}
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            This is a soft delete. You
            can restore the article later
            from the News list.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-200 p-5">
          <button
            type="button"
            onClick={onCancel}
            disabled={deleting}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={deleting}
            className="inline-flex min-w-28 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {deleting
              ? "Deleting..."
              : "Delete News"}
          </button>
        </div>
      </div>
    </div>
  );
}