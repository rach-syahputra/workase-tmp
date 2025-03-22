/*
  Warnings:

  - Added the required column `status` to the `user_assesments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserAssesmentStatus" AS ENUM ('PASSED', 'FAILED');

-- AlterTable
ALTER TABLE "user_assesments" ADD COLUMN     "status" "UserAssesmentStatus" NOT NULL;
