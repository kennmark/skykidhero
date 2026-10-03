-- CreateEnum
CREATE TYPE "TravelingSpiritVisitType" AS ENUM ('SINGLE', 'GROUP');

-- CreateTable
CREATE TABLE "TravelingSpiritVisit" (
    "id" SERIAL NOT NULL,
    "type" "TravelingSpiritVisitType" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "hintEnabled" BOOLEAN NOT NULL DEFAULT false,
    "hintImage" TEXT,
    "hintImagePublicId" TEXT,
    "hintUrl" TEXT,
    "wingBuffCount" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TravelingSpiritVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelingSpiritVisitSpirit" (
    "id" SERIAL NOT NULL,
    "travelingSpiritVisitId" INTEGER NOT NULL,
    "spiritId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "TravelingSpiritVisitSpirit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TravelingSpiritVisit_startDate_endDate_idx" ON "TravelingSpiritVisit"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "TravelingSpiritVisit_published_deletedAt_idx" ON "TravelingSpiritVisit"("published", "deletedAt");

-- CreateIndex
CREATE INDEX "TravelingSpiritVisitSpirit_travelingSpiritVisitId_idx" ON "TravelingSpiritVisitSpirit"("travelingSpiritVisitId");

-- CreateIndex
CREATE INDEX "TravelingSpiritVisitSpirit_spiritId_idx" ON "TravelingSpiritVisitSpirit"("spiritId");

-- CreateIndex
CREATE UNIQUE INDEX "TravelingSpiritVisitSpirit_travelingSpiritVisitId_spiritId_key" ON "TravelingSpiritVisitSpirit"("travelingSpiritVisitId", "spiritId");

-- CreateIndex
CREATE UNIQUE INDEX "TravelingSpiritVisitSpirit_travelingSpiritVisitId_displayOr_key" ON "TravelingSpiritVisitSpirit"("travelingSpiritVisitId", "displayOrder");

-- AddForeignKey
ALTER TABLE "TravelingSpiritVisitSpirit" ADD CONSTRAINT "TravelingSpiritVisitSpirit_travelingSpiritVisitId_fkey" FOREIGN KEY ("travelingSpiritVisitId") REFERENCES "TravelingSpiritVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelingSpiritVisitSpirit" ADD CONSTRAINT "TravelingSpiritVisitSpirit_spiritId_fkey" FOREIGN KEY ("spiritId") REFERENCES "Spirit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
