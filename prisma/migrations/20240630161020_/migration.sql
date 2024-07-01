-- DropIndex
DROP INDEX "Book_Maison d'édition_key";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "Statut" DROP NOT NULL;
