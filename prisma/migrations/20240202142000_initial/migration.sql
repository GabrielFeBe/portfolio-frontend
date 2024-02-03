-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mainLanguage" TEXT NOT NULL,
    "projectImage" TEXT NOT NULL,
    "deployLink" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "repositoryLink" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
