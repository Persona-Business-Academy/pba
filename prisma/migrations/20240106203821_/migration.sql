-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN', 'ARM');

-- CreateEnum
CREATE TYPE "Topic" AS ENUM ('GRAPHIC_DESIGN', 'UI_UX_DESIGN', 'FRONT_END', 'BACK_END', 'SMM', 'DIGITAL_MARKETING', 'BUSINESS_LAW', 'BUSINESS_ENGLISH', 'HRM');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'MASTER');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('AMD', 'USD');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" VARCHAR(45),
    "lastName" VARCHAR(45),
    "password" VARCHAR(60) NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "phone" VARCHAR(60),
    "address" VARCHAR(60),
    "country" VARCHAR(60),
    "state" VARCHAR(60),
    "city" VARCHAR(60),
    "confirmationCode" INTEGER,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" VARCHAR(45),
    "lastName" VARCHAR(45),
    "password" VARCHAR(60) NOT NULL,
    "role" "AdminRole" NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineCourse" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "subTitle" VARCHAR(45) NOT NULL,
    "courseLevel" "SkillLevel" NOT NULL,
    "coverPhoto" TEXT NOT NULL,
    "coverPhotoId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lessonsCount" INTEGER NOT NULL DEFAULT 0,
    "graduatedStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "enrolledStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "instructorId" INTEGER NOT NULL,
    "language" "Language" NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "topic" "Topic" NOT NULL,
    "whatYouWillLearn" TEXT[],
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OnlineCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineCourseLevel" (
    "id" SERIAL NOT NULL,
    "level" VARCHAR(45) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "onlineCourseId" INTEGER NOT NULL,

    CONSTRAINT "OnlineCourseLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineCourseDay" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(45) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "onlineCourseId" INTEGER NOT NULL,
    "onlineCourseLevelId" INTEGER NOT NULL,

    CONSTRAINT "OnlineCourseDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineCourseVideo" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "onlineCourseId" INTEGER NOT NULL,
    "onlineCourseLevelId" INTEGER NOT NULL,
    "onlineCourseDayId" INTEGER NOT NULL,

    CONSTRAINT "OnlineCourseVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineCourseComment" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "onlineCourseId" INTEGER,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "offlineCourseId" INTEGER,

    CONSTRAINT "OnlineCourseComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(45) NOT NULL,
    "profession" VARCHAR(45) NOT NULL,
    "lastName" VARCHAR(45) NOT NULL,
    "graduatedStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "enrolledStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "about" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "avatarId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfflineCourse" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "subTitle" TEXT NOT NULL,
    "topic" "Topic" NOT NULL,
    "coverPhoto" TEXT NOT NULL,
    "coverPhotoId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "ageLimit" TEXT NOT NULL,
    "totalDuration" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "courseLevel" "SkillLevel" NOT NULL,
    "graduatedStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "enrolledStudentsCount" INTEGER NOT NULL DEFAULT 0,
    "lessonsCount" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "whatYouWillLearn" TEXT[],
    "benefits" JSON NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "OfflineCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfflineCourseInstructors" (
    "id" SERIAL NOT NULL,
    "offlineCourseId" INTEGER NOT NULL,
    "instructorId" INTEGER NOT NULL,

    CONSTRAINT "OfflineCourseInstructors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_confirmationCode_key" ON "User"("confirmationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OnlineCourse_coverPhotoId_key" ON "OnlineCourse"("coverPhotoId");

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_avatarId_key" ON "Instructor"("avatarId");

-- CreateIndex
CREATE UNIQUE INDEX "OfflineCourse_coverPhotoId_key" ON "OfflineCourse"("coverPhotoId");

-- CreateIndex
CREATE UNIQUE INDEX "OfflineCourseInstructors_offlineCourseId_instructorId_key" ON "OfflineCourseInstructors"("offlineCourseId", "instructorId");

-- AddForeignKey
ALTER TABLE "OnlineCourse" ADD CONSTRAINT "OnlineCourse_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseLevel" ADD CONSTRAINT "OnlineCourseLevel_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseDay" ADD CONSTRAINT "OnlineCourseDay_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseDay" ADD CONSTRAINT "OnlineCourseDay_onlineCourseLevelId_fkey" FOREIGN KEY ("onlineCourseLevelId") REFERENCES "OnlineCourseLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseDayId_fkey" FOREIGN KEY ("onlineCourseDayId") REFERENCES "OnlineCourseDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseLevelId_fkey" FOREIGN KEY ("onlineCourseLevelId") REFERENCES "OnlineCourseLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseComment" ADD CONSTRAINT "OnlineCourseComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseComment" ADD CONSTRAINT "OnlineCourseComment_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseComment" ADD CONSTRAINT "OnlineCourseComment_offlineCourseId_fkey" FOREIGN KEY ("offlineCourseId") REFERENCES "OfflineCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfflineCourseInstructors" ADD CONSTRAINT "OfflineCourseInstructors_offlineCourseId_fkey" FOREIGN KEY ("offlineCourseId") REFERENCES "OfflineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfflineCourseInstructors" ADD CONSTRAINT "OfflineCourseInstructors_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
