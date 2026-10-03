/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Season` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Spirit" DROP CONSTRAINT "Spirit_mapId_fkey";

-- DropIndex
DROP INDEX "Season_year_idx";

-- AlterTable
ALTER TABLE "Season" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "imageAlt" TEXT,
ADD COLUMN     "imagePublicId" TEXT;

-- AlterTable
ALTER TABLE "Spirit" ALTER COLUMN "mapId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Season_code_key" ON "Season"("code");

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE SET NULL ON UPDATE CASCADE;
