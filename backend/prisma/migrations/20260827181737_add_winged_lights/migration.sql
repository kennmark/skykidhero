-- CreateTable
CREATE TABLE "WingedLight" (
    "id" SERIAL NOT NULL,
    "mapId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "groupKey" TEXT,
    "seasonGroupKey" TEXT,
    "image" TEXT,
    "imagePublicId" TEXT,
    "directions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "displayOrder" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "WingedLight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WingedLight_code_key" ON "WingedLight"("code");

-- CreateIndex
CREATE INDEX "WingedLight_mapId_published_deletedAt_idx" ON "WingedLight"("mapId", "published", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "WingedLight_mapId_displayOrder_key" ON "WingedLight"("mapId", "displayOrder");

-- AddForeignKey
ALTER TABLE "WingedLight" ADD CONSTRAINT "WingedLight_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;
