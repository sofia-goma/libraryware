/*
  Warnings:

  - You are about to drop the column `#id_categories` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_#id_sous_catégorie_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_#id_catégorie_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_#id_categories_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "parentId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "#id_categories";

-- DropTable
DROP TABLE "SubCategory";

-- CreateTable
CREATE TABLE "Admin" (
    "name" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "_UserCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserCategory_AB_unique" ON "_UserCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCategory_B_index" ON "_UserCategory"("B");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_sous_catégorie_fkey" FOREIGN KEY ("#id_sous_catégorie") REFERENCES "Category"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategory" ADD CONSTRAINT "_UserCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategory" ADD CONSTRAINT "_UserCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
