-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('AMD', 'USD');

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "offlineCourseId" INTEGER;

-- CreateTable
CREATE TABLE "OfflineCourse" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "subTitle" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "ageLimit" TEXT NOT NULL,
    "totalDuration" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "level" "SkillLevel" NOT NULL,
    "graduatedStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "whatYouWillLearn" JSON NOT NULL,
    "benefits" JSON NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OfflineCourse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_offlineCourseId_fkey" FOREIGN KEY ("offlineCourseId") REFERENCES "OfflineCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
