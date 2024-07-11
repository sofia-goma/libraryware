-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_#id_sous_catégorie_fkey";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_sous_catégorie_fkey" FOREIGN KEY ("#id_sous_catégorie") REFERENCES "Category"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
