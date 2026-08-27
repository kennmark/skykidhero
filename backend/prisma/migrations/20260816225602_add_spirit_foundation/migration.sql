-- CreateEnum
CREATE TYPE "SpiritType" AS ENUM ('REGULAR', 'SEASONAL');

-- CreateEnum
CREATE TYPE "SpiritCategory" AS ENUM ('EMOTE', 'STANCE', 'CALL', 'SOUND_CALL', 'FRIENDSHIP_ACTION', 'ITEM', 'NON_ENTITY', 'SPIRIT');

-- CreateEnum
CREATE TYPE "SpiritReliveType" AS ENUM ('FOLLOW_MEMORY', 'CARRY_MEMORY', 'COLLECT_MEMORY', 'QUEST_MEMORY', 'TASK', 'NONE');

-- CreateEnum
CREATE TYPE "SpiritCollectibleCurrency" AS ENUM ('CANDLES', 'HEARTS', 'SEASON_CANDLES', 'FREE');

-- CreateTable
CREATE TABLE "Spirit" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "mapId" INTEGER NOT NULL,
    "type" "SpiritType" NOT NULL,
    "name" TEXT NOT NULL,
    "category" "SpiritCategory" NOT NULL,
    "reliveType" "SpiritReliveType" NOT NULL,
    "difficultyLevel" INTEGER NOT NULL DEFAULT 0,
    "difficultyTypes" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "iconImage" TEXT,
    "iconImagePublicId" TEXT,
    "detailImage" TEXT,
    "detailImagePublicId" TEXT,
    "guideVideoUrl" TEXT,
    "directions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "displayOrder" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Spirit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpiritCollectible" (
    "id" SERIAL NOT NULL,
    "spiritId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "image" TEXT,
    "imagePublicId" TEXT,
    "currency" "SpiritCollectibleCurrency" NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "displayOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpiritCollectible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpiritTreeCost" (
    "id" SERIAL NOT NULL,
    "spiritId" INTEGER NOT NULL,
    "candles" INTEGER NOT NULL DEFAULT 0,
    "hearts" INTEGER NOT NULL DEFAULT 0,
    "ascendedCandles" INTEGER NOT NULL DEFAULT 0,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpiritTreeCost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spirit_code_key" ON "Spirit"("code");

-- CreateIndex
CREATE INDEX "Spirit_mapId_type_published_deletedAt_idx" ON "Spirit"("mapId", "type", "published", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Spirit_mapId_type_displayOrder_key" ON "Spirit"("mapId", "type", "displayOrder");

-- CreateIndex
CREATE INDEX "SpiritCollectible_spiritId_idx" ON "SpiritCollectible"("spiritId");

-- CreateIndex
CREATE UNIQUE INDEX "SpiritCollectible_spiritId_displayOrder_key" ON "SpiritCollectible"("spiritId", "displayOrder");

-- CreateIndex
CREATE INDEX "SpiritTreeCost_spiritId_idx" ON "SpiritTreeCost"("spiritId");

-- CreateIndex
CREATE UNIQUE INDEX "SpiritTreeCost_spiritId_displayOrder_key" ON "SpiritTreeCost"("spiritId", "displayOrder");

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpiritCollectible" ADD CONSTRAINT "SpiritCollectible_spiritId_fkey" FOREIGN KEY ("spiritId") REFERENCES "Spirit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpiritTreeCost" ADD CONSTRAINT "SpiritTreeCost_spiritId_fkey" FOREIGN KEY ("spiritId") REFERENCES "Spirit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
