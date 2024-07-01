/*
  Warnings:

  - Made the column `Maison d'édition` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Statut` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "Maison d'édition" SET NOT NULL,
ALTER COLUMN "Statut" SET NOT NULL;
