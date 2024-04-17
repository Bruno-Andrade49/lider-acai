-- CreateEnum
CREATE TYPE "RoleUser" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "RoleUser" NOT NULL DEFAULT 'USER';
