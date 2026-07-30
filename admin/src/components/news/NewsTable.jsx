import { useState } from "react";

import NewsStatusChip from './NewsStatusChip';
import DeleteNewsModal from "./newsDeleteNewsModal";

export default function NewsTable({  
  news,
  onEdit,
  onDelete,
  onRestore, 
}) {
  const [
    selectedNews,
    setSelectedNews,
  ] = useState(null);

  const [
    deleting,
    setDeleting,
  ] = useState(false);

  function openDeleteModal(item) {
    setSelectedNews(item);
  }

  function closeDeleteModal() {
    if (deleting) {
      return;
    }

    setSelectedNews(null);
  }

  async function confirmDelete() {
    if (!selectedNews?.id) {
      return;
    }

    try {
      setDeleting(true);

      await onDelete(
        selectedNews.id
      );

      setSelectedNews(null);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Featured</th>
            <th className="px-4 py-3 text-left">Published</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-3">
                 <div className="font-medium">
                  {item.title}
                </div>

                <div className="text-sm text-gray-500">
                  {item.slug}
              </div>
              </td>

              <td className="px-4 py-3">
                <NewsStatusChip news={item} />
              </td>

              <td className="px-4 py-3">
                {item.featured ? "⭐" : "-"}
              </td>

              <td className="px-4 py-3">
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-4 py-3">
                {item.deletedAt ? (
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        onRestore(item.id)
                      }
                      className="cursor-pointer rounded-md bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-200"
                    >
                      Restore
                    </button>
                  </div>
                ) : (

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => onEdit(item.id)}
                      className="rounded-md bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-200 cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                          openDeleteModal(
                            item
                          )
                        }
                      className="rounded-md bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-200 cursor-pointer"
                    >
                      Delete
                    </button>

                  </div>

                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteNewsModal
        open={Boolean(selectedNews)}
        news={selectedNews}
        deleting={deleting}
        onCancel={closeDeleteModal}
        onConfirm={confirmDelete}
      />
      
    </div>
  );
}