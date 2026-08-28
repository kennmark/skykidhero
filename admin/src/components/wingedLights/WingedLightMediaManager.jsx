import {
  useRef,
  useState,
} from "react";

import {
  ArrowUpTrayIcon,
  PhotoIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const MAX_FILE_SIZE =
  5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to update the Winged Light image."
  );
}

export default function WingedLightMediaManager({
  wingedLight,
  onUpload,
  onRemove,
}) {
  const inputRef =
    useRef(null);

  const [
    selectedFile,
    setSelectedFile,
  ] = useState(null);

  const [
    uploading,
    setUploading,
  ] = useState(false);

  const [
    removing,
    setRemoving,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  const busy =
    uploading ||
    removing;

  function clearInput() {
    setSelectedFile(null);

    if (inputRef.current) {
      inputRef.current.value =
        "";
    }
  }

  function handleFileChange(
    event
  ) {
    const file =
      event.target.files?.[0];

    setError("");
    setMessage("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (
      file.size >
      MAX_FILE_SIZE
    ) {
      clearInput();

      setError(
        "Image must be 5 MB or smaller."
      );

      return;
    }

    /*
     * Some clients can report a
     * legitimate image as
     * application/octet-stream.
     *
     * The backend performs the final
     * real-byte validation.
     */
    const hasUsableMimeType =
      file.type &&
      file.type !==
        "application/octet-stream";

    if (
      hasUsableMimeType &&
      !ACCEPTED_TYPES.includes(
        file.type
      )
    ) {
      clearInput();

      setError(
        "Only JPEG, PNG, WebP, and GIF images are supported."
      );

      return;
    }

    setSelectedFile(file);
  }

  async function handleUpload() {
    if (!selectedFile) {
      setError(
        "Please select an image."
      );

      return;
    }

    try {
      setUploading(true);
      setError("");
      setMessage("");

      await onUpload(
        selectedFile
      );

      clearInput();

      setMessage(
        "Winged Light image saved successfully."
      );
    } catch (
      requestError
    ) {
      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove() {
    const confirmed =
      window.confirm(
        "Remove this Winged Light image? The Cloudinary asset will also be deleted."
      );

    if (!confirmed) {
      return;
    }

    try {
      setRemoving(true);
      setError("");
      setMessage("");

      await onRemove();

      clearInput();

      setMessage(
        "Winged Light image removed successfully."
      );
    } catch (
      requestError
    ) {
      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setRemoving(false);
    }
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Winged Light Image
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Manage the image stored
          in Cloudinary for this
          Winged Light.
        </p>
      </div>

      <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <h3 className="font-bold text-gray-900">
            Location Image
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            JPEG, PNG, WebP or GIF.
            Maximum 5 MB.
          </p>
        </div>

        <div className="grid gap-5 p-4 md:grid-cols-[220px_1fr]">
          <div className="flex h-52 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            {wingedLight?.image ? (
              <img
                src={
                  wingedLight.image
                }
                alt={
                  wingedLight.label ||
                  "Winged Light"
                }
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="text-center text-gray-400">
                <PhotoIcon className="mx-auto h-10 w-10" />

                <p className="mt-2 text-xs font-medium">
                  No image uploaded
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Select image
              </label>

              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                disabled={busy}
                onChange={
                  handleFileChange
                }
                className="block w-full rounded-lg border border-gray-300 text-sm text-gray-700 file:mr-3 file:border-0 file:bg-gray-100 file:px-3 file:py-2.5 file:text-sm file:font-semibold"
              />
            </div>

            {selectedFile && (
              <div className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-700">
                Selected:{" "}
                <span className="font-semibold">
                  {
                    selectedFile.name
                  }
                </span>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {message && (
              <div
                role="status"
                className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700"
              >
                {message}
              </div>
            )}

            <div className="mt-auto flex flex-wrap gap-2">
              <button
                type="button"
                disabled={
                  busy ||
                  !selectedFile
                }
                onClick={
                  handleUpload
                }
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowUpTrayIcon className="h-4 w-4" />

                {uploading
                  ? "Uploading..."
                  : wingedLight?.image
                    ? "Replace Image"
                    : "Upload Image"}
              </button>

              {wingedLight?.image && (
                <button
                  type="button"
                  disabled={busy}
                  onClick={
                    handleRemove
                  }
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <TrashIcon className="h-4 w-4" />

                  {removing
                    ? "Removing..."
                    : "Remove Image"}
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}