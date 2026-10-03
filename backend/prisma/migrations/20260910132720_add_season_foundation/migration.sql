/*
  Warnings:

  - You are about to drop the column `code` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `imageAlt` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `imagePublicId` on the `Season` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Season` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Season_code_key";

-- AlterTable
ALTER TABLE "Season" DROP COLUMN "code",
DROP COLUMN "image",
DROP COLUMN "imageAlt",
DROP COLUMN "imagePublicId",
ADD COLUMN     "iconImage" TEXT,
ADD COLUMN     "iconImageAlt" TEXT,
ADD COLUMN     "iconImagePublicId" TEXT,
ADD COLUMN     "intro" TEXT,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Season_number_key" ON "Season"("number");

-- CreateIndex
CREATE INDEX "Season_year_idx" ON "Season"("year");
