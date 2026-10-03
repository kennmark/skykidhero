import { useRef, useState } from "react";

import {
  uploadAdminSeasonMedia,
  removeAdminSeasonMedia,
} from "../../services/adminSeason.service.js";

const MAX_FILE_SIZE =
  5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

export default function SeasonMediaManager({
  season,
  mediaType,
  label,
  description,
  onUpdated,
}) {
  const fileInputRef =
    useRef(null);

  const [uploading, setUploading] =
    useState(false);

  const [removing, setRemoving] =
    useState(false);

  const [error, setError] =
    useState("");

  const imageUrl =
    mediaType === "banner"
      ? season?.image
      : season?.iconImage;

  async function handleFileChange(event) {
    const file =
      event.target.files?.[0];

    event.target.value = "";

    if (!file) return;

    setError("");

    if (
      !ACCEPTED_TYPES.includes(
        file.type,
      )
    ) {
      setError(
        "Please select a JPEG, PNG, WebP, or GIF image.",
      );
      return;
    }

    if (
      file.size > MAX_FILE_SIZE
    ) {
      setError(
        "Image must not exceed 5 MB.",
      );
      return;
    }

    try {
      setUploading(true);

      const response =
        await uploadAdminSeasonMedia(
          season.id,
          mediaType,
          file,
        );

      onUpdated(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to upload image.",
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove() {
    if (!imageUrl) return;

    const confirmed =
      window.confirm(
        `Remove the Season ${label.toLowerCase()} image?`,
      );

    if (!confirmed) return;

    try {
      setRemoving(true);
      setError("");

      const response =
        await removeAdminSeasonMedia(
          season.id,
          mediaType,
        );

      onUpdated(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to remove image.",
      );
    } finally {
      setRemoving(false);
    }
  }

  return (
    <section className="rounded-xl border p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          {label}
        </h2>

        <p className="mt-1 text-sm opacity-70">
          {description}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${season.name} ${label}`}
            className={
              mediaType === "banner"
                ? "block h-48 w-full object-cover"
                : "mx-auto block h-48 w-48 object-contain p-4"
            }
          />
        ) : (
          <div className="flex h-48 items-center justify-center text-sm opacity-60">
            No {label.toLowerCase()} uploaded.
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 rounded-lg border p-3 text-sm">
          {error}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={
            uploading ||
            removing
          }
          onClick={() =>
            fileInputRef.current?.click()
          }
          className="rounded-lg px-4 py-2 font-medium disabled:opacity-50"
        >
          {uploading
            ? "Uploading..."
            : imageUrl
              ? "Replace Image"
              : "Upload Image"}
        </button>

        {imageUrl && (
          <button
            type="button"
            disabled={
              uploading ||
              removing
            }
            onClick={handleRemove}
            className="rounded-lg border px-4 py-2 font-medium disabled:opacity-50"
          >
            {removing
              ? "Removing..."
              : "Remove Image"}
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="mt-3 text-xs opacity-60">
        JPEG, PNG, WebP, or GIF · Maximum 5 MB
      </p>
    </section>
  );
}