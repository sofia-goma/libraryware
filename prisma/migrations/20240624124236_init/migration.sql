-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('available', 'reserve', 'borrowed');

-- CreateTable
CREATE TABLE "User" (
    "ID" TEXT NOT NULL,
    "Nom" TEXT NOT NULL,
    "Prénom" TEXT NOT NULL,
    "Photo de profil" TEXT,
    "Email" TEXT NOT NULL,
    "Mot de passe" TEXT NOT NULL,
    "Numero de téléphone" TEXT NOT NULL,
    "Adresse" TEXT,
    "Date d'enregistrement" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Date d'abonnement" TIMESTAMP(3),
    "Date de fin d'abonnement" TIMESTAMP(3),
    "Statut" BOOLEAN NOT NULL,
    "#id_categories" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Category" (
    "ID" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,
    "Description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "ID" SERIAL NOT NULL,
    "Sous-Categorie" TEXT NOT NULL,
    "Description" TEXT,
    "#id_catégorie" INTEGER NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Book" (
    "ID" SERIAL NOT NULL,
    "#id_sous_catégorie" INTEGER NOT NULL,
    "#id_auteur" INTEGER NOT NULL,
    "Titre" TEXT NOT NULL,
    "Cover" TEXT NOT NULL,
    "Année de publication" INTEGER NOT NULL,
    "Nombre des pages" INTEGER NOT NULL,
    "Code du livre" TEXT NOT NULL,
    "Maison d'édition" TEXT NOT NULL,
    "Statut" "Statut" NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Author" (
    "ID" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,
    "Prénom" TEXT,
    "Photo de Profile" TEXT,
    "A propos" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "#id_user" TEXT NOT NULL,
    "#id_book" INTEGER NOT NULL,
    "Date de réservation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Date de prêt" TIMESTAMP(3),
    "Date de retour" TIMESTAMP(3),

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Numero de téléphone_key" ON "User"("Numero de téléphone");

-- CreateIndex
CREATE UNIQUE INDEX "Book_Code du livre_key" ON "Book"("Code du livre");

-- CreateIndex
CREATE UNIQUE INDEX "Book_Maison d'édition_key" ON "Book"("Maison d'édition");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_#id_categories_fkey" FOREIGN KEY ("#id_categories") REFERENCES "Category"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_#id_catégorie_fkey" FOREIGN KEY ("#id_catégorie") REFERENCES "Category"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_sous_catégorie_fkey" FOREIGN KEY ("#id_sous_catégorie") REFERENCES "SubCategory"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_auteur_fkey" FOREIGN KEY ("#id_auteur") REFERENCES "Author"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_user_fkey" FOREIGN KEY ("#id_user") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_book_fkey" FOREIGN KEY ("#id_book") REFERENCES "Book"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
