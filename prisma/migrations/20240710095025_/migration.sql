-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_Sous-catégorie de_fkey";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_Sous-catégorie de_fkey" FOREIGN KEY ("Sous-catégorie de") REFERENCES "Category"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
