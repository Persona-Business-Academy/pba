-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('ADMIN', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "confirmationCode" INTEGER,
    "firstName" VARCHAR(45),
    "lastName" VARCHAR(45),
    "password" VARCHAR(60) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

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
    "name" VARCHAR(45) NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_confirmationCode_key" ON "User"("confirmationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "OnlineCourseLevel" ADD CONSTRAINT "OnlineCourseLevel_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseDay" ADD CONSTRAINT "OnlineCourseDay_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseDay" ADD CONSTRAINT "OnlineCourseDay_onlineCourseLevelId_fkey" FOREIGN KEY ("onlineCourseLevelId") REFERENCES "OnlineCourseLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseId_fkey" FOREIGN KEY ("onlineCourseId") REFERENCES "OnlineCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseLevelId_fkey" FOREIGN KEY ("onlineCourseLevelId") REFERENCES "OnlineCourseLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineCourseVideo" ADD CONSTRAINT "OnlineCourseVideo_onlineCourseDayId_fkey" FOREIGN KEY ("onlineCourseDayId") REFERENCES "OnlineCourseDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;
