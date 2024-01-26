-- CreateEnum
CREATE TYPE "ApplicantType" AS ENUM ('JOB', 'OFFLINE_COURSE');

-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "for" "ApplicantType" NOT NULL,
    "offlineCourseId" INTEGER,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_offlineCourseId_fkey" FOREIGN KEY ("offlineCourseId") REFERENCES "OfflineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
