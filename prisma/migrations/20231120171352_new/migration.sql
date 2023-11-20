/*
  Warnings:

  - Added the required column `courseLevel` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverPhoto` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `graduatedStudentsCount` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructorId` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatYouWillLearn` to the `OnlineCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN', 'ARM');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'MASTER');

-- AlterTable
ALTER TABLE "OnlineCourse" ADD COLUMN     "courseLevel" "SkillLevel" NOT NULL,
ADD COLUMN     "coverPhoto" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "graduatedStudentsCount" INTEGER NOT NULL,
ADD COLUMN     "instructorId" INTEGER NOT NULL,
ADD COLUMN     "language" "Language" NOT NULL,
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "topic" VARCHAR(45) NOT NULL,
ADD COLUMN     "whatYouWillLearn" JSON NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "OnlineCourseComment" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "onlineCourseId" INTEGER,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OnlineCourseComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(45) NOT NULL,
    "lastName" VARCHAR(45) NOT NULL,
    "about" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OnlineCourse" ADD CONSTRAINT "OnlineCourse_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseComment" ADD CONSTRAINT "OnlineCourseComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseComment" ADD CONSTRAINT "OnlineCourseComment_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
