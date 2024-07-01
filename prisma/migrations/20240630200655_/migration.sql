/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ID` column on the `Book` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `#id_book` on the `Loan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_#id_book_fkey";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "ID",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "#id_book",
ADD COLUMN     "#id_book" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_book_fkey" FOREIGN KEY ("#id_book") REFERENCES "Book"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
