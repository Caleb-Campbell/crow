/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Crow" DROP CONSTRAINT "Crow_id_fkey";

-- AlterTable
ALTER TABLE "Crow" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "User";
