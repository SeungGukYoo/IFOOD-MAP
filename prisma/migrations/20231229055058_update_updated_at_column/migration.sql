-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "updatedAt" SET DEFAULT NOW() ON UPDATE NOW();
