/*
  Warnings:

  - You are about to drop the column `exp` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `iat` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `jti` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "exp",
DROP COLUMN "iat",
DROP COLUMN "jti";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;
