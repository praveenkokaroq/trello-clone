-- CreateTable
CREATE TABLE "Lane" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "label" TEXT,
    "style" TEXT,
    "currentPage" INTEGER,
    "droppable" BOOLEAN,
    "labelStyle" TEXT,
    "cardStyle" TEXT,
    "disallowAddingCard" BOOLEAN,

    CONSTRAINT "Lane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "label" TEXT,
    "description" TEXT,
    "laneId" TEXT,
    "style" TEXT,
    "draggable" BOOLEAN,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_laneId_fkey" FOREIGN KEY ("laneId") REFERENCES "Lane"("id") ON DELETE SET NULL ON UPDATE CASCADE;
