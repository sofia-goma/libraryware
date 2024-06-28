/*
  Warnings:

  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "Maison d'édition" DROP NOT NULL,
ALTER COLUMN "Statut" SET DEFAULT 'available';

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "parentId",
ADD COLUMN     "Sous-catégorie de" INTEGER;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Date d'enregistrement" DROP NOT NULL,
ALTER COLUMN "Statut" DROP NOT NULL,
ALTER COLUMN "Statut" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_Sous-catégorie de_fkey" FOREIGN KEY ("Sous-catégorie de") REFERENCES "Category"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
