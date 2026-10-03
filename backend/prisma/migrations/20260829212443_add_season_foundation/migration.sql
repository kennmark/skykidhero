-- AlterTable
ALTER TABLE "Spirit" ADD COLUMN     "seasonId" INTEGER;

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "image" TEXT,
    "imagePublicId" TEXT,
    "imageAlt" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Season_code_key" ON "Season"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Season_slug_key" ON "Season"("slug");

-- CreateIndex
CREATE INDEX "Season_published_deletedAt_idx" ON "Season"("published", "deletedAt");

-- CreateIndex
CREATE INDEX "Spirit_seasonId_type_published_deletedAt_idx" ON "Spirit"("seasonId", "type", "published", "deletedAt");

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;
