/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_#id_book_fkey";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
ALTER COLUMN "ID" DROP DEFAULT,
ALTER COLUMN "ID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("ID");
DROP SEQUENCE "Book_ID_seq";

-- AlterTable
ALTER TABLE "Loan" ALTER COLUMN "#id_book" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_book_fkey" FOREIGN KEY ("#id_book") REFERENCES "Book"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
