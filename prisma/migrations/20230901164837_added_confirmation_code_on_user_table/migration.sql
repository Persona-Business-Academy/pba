/*
  Warnings:

  - A unique constraint covering the columns `[confirmationCode]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "confirmationCode" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "users_confirmationCode_key" ON "users"("confirmationCode");
