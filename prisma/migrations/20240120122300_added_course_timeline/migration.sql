-- CreateTable
CREATE TABLE "OfflineCourseTimeline" (
    "id" SERIAL NOT NULL,
    "offlineCourseId" INTEGER NOT NULL,
    "startDates" TIMESTAMP(3)[],

    CONSTRAINT "OfflineCourseTimeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OfflineCourseTimeline" ADD CONSTRAINT "OfflineCourseTimeline_offlineCourseId_fkey" FOREIGN KEY ("offlineCourseId") REFERENCES "OfflineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
