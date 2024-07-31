-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('Disponible', 'Reserve', 'Lecture');

-- CreateTable
CREATE TABLE "Admin" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("email")
);

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
    "Date d'enregistrement" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "Date d'abonnement" TIMESTAMP(3),
    "Date de fin d'abonnement" TIMESTAMP(3),
    "Statut" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Book" (
    "ID" SERIAL NOT NULL,
    "#id_sous_catégorie" INTEGER NOT NULL,
    "#id_auteur" INTEGER,
    "Titre" TEXT,
    "Cover" TEXT,
    "Année de publication" INTEGER,
    "Nombre des pages" INTEGER,
    "Code du livre" TEXT,
    "Maison d'édition" TEXT,
    "Statut" "Statut" DEFAULT 'Disponible',

    CONSTRAINT "Book_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Category" (
    "ID" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,
    "Description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("ID")
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

-- CreateTable
CREATE TABLE "_UserCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Numero de téléphone_key" ON "User"("Numero de téléphone");

-- CreateIndex
CREATE UNIQUE INDEX "Book_Code du livre_key" ON "Book"("Code du livre");

-- CreateIndex
CREATE UNIQUE INDEX "_UserCategory_AB_unique" ON "_UserCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCategory_B_index" ON "_UserCategory"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_#id_sous_catégorie_fkey" FOREIGN KEY ("#id_sous_catégorie") REFERENCES "Category"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_user_fkey" FOREIGN KEY ("#id_user") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_#id_book_fkey" FOREIGN KEY ("#id_book") REFERENCES "Book"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategory" ADD CONSTRAINT "_UserCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCategory" ADD CONSTRAINT "_UserCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
