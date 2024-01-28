/*
  Warnings:

  - A unique constraint covering the columns `[offlineCourseId]` on the table `OfflineCourseTimeline` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OfflineCourseTimeline_offlineCourseId_key" ON "OfflineCourseTimeline"("offlineCourseId");
