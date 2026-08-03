-- Ensure the News imagePublicId column exists in every environment.
-- This remains safe when the column already exists.

ALTER TABLE "News"
ADD COLUMN IF NOT EXISTS "imagePublicId" TEXT;