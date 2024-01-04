-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_authorId_fkey";

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "authorId" DROP NOT NULL;
