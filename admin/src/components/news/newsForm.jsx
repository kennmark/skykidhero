import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { newsSchema } from "../../validation/news.schema";
import {
  useEffect,
  useMemo,
  useState, 
} from "react";
import { Link } from "react-router-dom";
import {
  PhotoIcon,
  TrashIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

import {
  uploadNewsImage,
} from "../../services/upload.service.js";

const EMPTY_VALUES = {
  title: "",
  summary: "",
  body: "",
  image: "",
  imagePublicId: "",
  externalUrl: "",
  featured: false,
  published: false,
}

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "http://localhost:5000";

function getImageUrl(image) {
  if (!image) {
    return "";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  return `${BACKEND_URL}${image}`;
}

export default function NewsForm({
  initialValues = EMPTY_VALUES,
  onSubmit,
  submitLabel = "Save News",
  serverError = "",
}) {
  const [uploading, setUploading] =
    useState(false);

  const [uploadError, setUploadError] =
    useState("");

  const [selectedFile, setSelectedFile] =
    useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
   resolver: zodResolver(newsSchema),
    defaultValues: EMPTY_VALUES,
  });

  const imageValue = watch("image");

  const previewUrl = useMemo(() => {
    return getImageUrl(imageValue);
  }, [imageValue]);

  useEffect(() => {
    reset({
      ...EMPTY_VALUES,
      ...initialValues,
    });

    setSelectedFile(null)
    setUploadError("")

  }, [initialValues, reset])

  function handleFileChange(event) {
    const file =
      event.target.files?.[0];

    setUploadError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setSelectedFile(null);

      setUploadError(
        "Please select a valid image file."
      );

      event.target.value = "";

      return;
    }

    setSelectedFile(file);
  }

  async function handleImageUpload() {
    if (!selectedFile) {
      setUploadError(
        "Please select an image first."
      );

      return;
    }

    try {
      setUploading(true);
      setUploadError("");

      const uploadedImage =
        await uploadNewsImage(
          selectedFile
        );

      if (!uploadedImage?.url) {
        throw new Error(
          "The server did not return an image URL."
        );
      }

      setValue(
        "image",
        uploadedImage.url,
        {
          shouldDirty: true,
          shouldValidate: true,
        }
      );

      setValue(
        "imagePublicId",
        uploadedImage.publicId ||
        uploadedImage.public_id || "",
        {
          shouldDirty: true,
          shouldValidate: true,
        }
      );

      setSelectedFile(null);
    } catch (error) {
      setUploadError(
        error.response?.data?.message ||
          error.message ||
          "Unable to upload the image."
      );
    } finally {
      setUploading(false);
    }
  }

  function handleRemoveImage() {
    setValue(
      "image",
      "",
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );

    setValue(
      "imagePublicId",
      "",
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    )

    setSelectedFile(null);
    setUploadError("");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-lg bg-white p-6 shadow-sm"
    >
      {serverError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Title
        </label>

        <input
          id="title"
          type="text"
          {...register("title")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          placeholder="Enter news title"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-600">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="summary"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Summary
        </label>

        <textarea
          id="summary"
          rows="3"
          {...register("summary")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          placeholder="Enter a short summary"
        />

        {errors.summary && (
          <p className="mt-1 text-sm text-red-600">
            {errors.summary.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="body"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Body
        </label>

        <textarea
          id="body"
          rows="12"
          {...register("body")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          placeholder="Write the full news article"
        />

        {errors.body && (
          <p className="mt-1 text-sm text-red-600">
            {errors.body.message}
          </p>
        )}
      </div>

     <div className="space-y-3">
        <div>
          <label
            htmlFor="news-image"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Featured Image
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              id="news-image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="block w-full rounded-md border border-gray-300 text-sm text-gray-700 file:mr-4 file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200 disabled:opacity-60"
            />

            <button
              type="button"
              onClick={handleImageUpload}
              disabled={
                uploading ||
                !selectedFile
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ArrowUpTrayIcon className="h-5 w-5" />

              {uploading
                ? "Uploading..."
                : "Upload Image"}
            </button>
          </div>

          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">
              Selected:{" "}
              <span className="font-medium">
                {selectedFile.name}
              </span>
            </p>
          )}

          {uploadError && (
            <p className="mt-2 text-sm text-red-600">
              {uploadError}
            </p>
          )}

          {errors.image && (
            <p className="mt-2 text-sm text-red-600">
              {errors.image.message}
            </p>
          )}
        </div>

        <input
          type="hidden"
          {...register("image")}
        />

        <input
          type="hidden"
          {...register("imagePublicId")}
        />
        
       {previewUrl ? (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <PhotoIcon className="h-5 w-5 text-gray-500" />

                <span className="text-sm font-medium text-gray-700">
                  Image preview
                </span>
              </div>

              <button
                type="button"
                onClick={handleRemoveImage}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <TrashIcon className="h-4 w-4" />

                Remove
              </button>
            </div>

            <div className="bg-gray-100 p-4">
              <img
                src={previewUrl}
                alt="News featured preview"
                className="max-h-80 w-full rounded-md object-contain"
              />
            </div>

            <div className="border-t border-gray-200 px-4 py-3">
              <p className="break-all text-xs text-gray-500">
                {imageValue}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex min-h-40 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center">
            <PhotoIcon className="h-10 w-10 text-gray-400" />

            <p className="mt-2 text-sm text-gray-500">
              No featured image uploaded.
            </p>
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="externalUrl"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          External URL
        </label>

        <input
          id="externalUrl"
          type="url"
          {...register("externalUrl")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          placeholder="https://example.com"
        />

        {errors.externalUrl && (
          <p className="mt-1 text-sm text-red-600">
            {errors.externalUrl.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            {...register("featured")}
            className="h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm font-medium text-gray-700">
            Featured
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            {...register("published")}
            className="h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm font-medium text-gray-700">
            Published
          </span>
        </label>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
        <Link
          to="/news"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isSubmitting || uploading}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}