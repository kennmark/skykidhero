/*
  Warnings:

  - You are about to drop the column `excerpt` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `News` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN');

-- DropForeignKey
ALTER TABLE "public"."News" DROP CONSTRAINT "News_authorId_fkey";

-- DropIndex
DROP INDEX "public"."News_slug_key";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "excerpt",
DROP COLUMN "publishedAt",
DROP COLUMN "slug",
ADD COLUMN     "link" TEXT,
ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "email" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ADMIN';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
