/*
  Warnings:

  - Added the required column `adressId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "adressId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
