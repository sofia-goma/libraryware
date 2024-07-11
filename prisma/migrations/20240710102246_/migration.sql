-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_#id_auteur_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_#id_sous_catégorie_fkey";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_sous_catégorie_fkey" FOREIGN KEY ("#id_sous_catégorie") REFERENCES "Category"("ID") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_auteur_fkey" FOREIGN KEY ("#id_auteur") REFERENCES "Author"("ID") ON DELETE SET DEFAULT ON UPDATE CASCADE;
