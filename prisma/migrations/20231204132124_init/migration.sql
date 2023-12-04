/*
  Warnings:

  - You are about to drop the column `exp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `iat` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `jti` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_expires_in` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "exp" INTEGER,
ADD COLUMN     "iat" INTEGER,
ADD COLUMN     "jti" TEXT,
ADD COLUMN     "refresh_token_expires_in" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "exp",
DROP COLUMN "iat",
DROP COLUMN "jti",
DROP COLUMN "refresh_token_expires_in";
