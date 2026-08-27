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

const MEDIA_SLOTS = [
  {
    slot: "icon",
    field: "iconImage",
    title: "Spirit Icon",
    description:
      "Small Spirit icon used on cards and Spirit previews.",
    accept:
      "image/jpeg,image/png,image/webp,image/gif",
    objectFit: "object-contain",
  },

  {
    slot: "detail",
    field: "detailImage",
    title: "Spirit Detail Image",
    description:
      "Main Spirit image used when showing the Spirit details.",
    accept:
      "image/jpeg,image/png,image/webp,image/gif",
    objectFit: "object-contain",
  },
];

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to update Spirit media."
  );
}

function SpiritMediaCard({
  config,
  spirit,
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
    message,
    setMessage,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const mediaUrl =
    spirit?.[config.field];

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

    const acceptedTypes =
      config.accept.split(",");

    /*
     * Some clients may report a
     * legitimate image as
     * application/octet-stream.
     *
     * The backend verifies the actual
     * file bytes using file-type.
     */
    const hasUsableMimeType =
      file.type &&
      file.type !==
        "application/octet-stream";

    if (
      hasUsableMimeType &&
      !acceptedTypes.includes(
        file.type
      )
    ) {
      clearInput();

      setError(
        "The selected image type is not supported."
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
        config.slot,
        selectedFile
      );

      clearInput();

      setMessage(
        `${config.title} saved successfully.`
      );
    } catch (requestError) {
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
        `Remove the ${config.title}? The Cloudinary asset will also be deleted.`
      );

    if (!confirmed) {
      return;
    }

    try {
      setRemoving(true);
      setError("");
      setMessage("");

      await onRemove(
        config.slot
      );

      clearInput();

      setMessage(
        `${config.title} removed successfully.`
      );
    } catch (requestError) {
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
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-3 py-2.5">
        <h3 className="text-sm font-bold text-gray-900">
          {config.title}
        </h3>

        <p className="mt-0.5 text-xs text-gray-500">
          {config.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="flex h-28 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          {mediaUrl ? (
            <img
              src={mediaUrl}
              alt={config.title}
              className={`h-full w-full ${config.objectFit}`}
            />
          ) : (
            <div className="text-center text-gray-400">
              <PhotoIcon className="mx-auto h-10 w-10" />

              <p className="mt-2 text-xs font-medium">
                No media uploaded
              </p>
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={config.accept}
          disabled={busy}
          onChange={
            handleFileChange
          }
          className="block w-full rounded-lg border border-gray-300 text-xs text-gray-700 file:mr-3 file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-xs file:font-semibold"
        />

        {selectedFile && (
          <p className="truncate text-xs text-sky-700">
            Selected:{" "}
            {selectedFile.name}
          </p>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </div>
        )}

        {message && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-700">
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
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowUpTrayIcon className="h-4 w-4" />

            {uploading
              ? "Uploading..."
              : mediaUrl
                ? "Replace"
                : "Upload"}
          </button>

          {mediaUrl && (
            <button
              type="button"
              disabled={busy}
              onClick={
                handleRemove
              }
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <TrashIcon className="h-4 w-4" />

              {removing
                ? "Removing..."
                : "Remove"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function SpiritMediaManager({
  spirit,
  onUpload,
  onRemove,
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Spirit Media
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Manage the Spirit icon and
          detail image stored in
          Cloudinary.
        </p>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-2">
        {MEDIA_SLOTS.map(
          (config) => (
            <SpiritMediaCard
              key={config.slot}
              config={config}
              spirit={spirit}
              onUpload={
                onUpload
              }
              onRemove={
                onRemove
              }
            />
          )
        )}
      </div>
    </section>
  );
}