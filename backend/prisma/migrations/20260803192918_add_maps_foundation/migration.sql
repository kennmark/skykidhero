-- CreateEnum
CREATE TYPE "MapSectionType" AS ENUM ('INFO', 'REGULAR_SPIRITS', 'SEASON_SPIRITS', 'WINGED_LIGHTS', 'MAP_SHRINES', 'DYE_RATIO');

-- CreateTable
CREATE TABLE "Map" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "subtitle" TEXT,
    "introduction" TEXT,
    "caption" TEXT,
    "image" TEXT,
    "imagePublicId" TEXT,
    "imageAlt" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MapSection" (
    "id" SERIAL NOT NULL,
    "mapId" INTEGER NOT NULL,
    "type" "MapSectionType" NOT NULL,
    "heading" TEXT,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MapSection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Map_slug_key" ON "Map"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Map_displayOrder_key" ON "Map"("displayOrder");

-- CreateIndex
CREATE INDEX "Map_published_deletedAt_idx" ON "Map"("published", "deletedAt");

-- CreateIndex
CREATE INDEX "MapSection_mapId_published_idx" ON "MapSection"("mapId", "published");

-- CreateIndex
CREATE UNIQUE INDEX "MapSection_mapId_type_key" ON "MapSection"("mapId", "type");

-- AddForeignKey
ALTER TABLE "MapSection" ADD CONSTRAINT "MapSection_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;
