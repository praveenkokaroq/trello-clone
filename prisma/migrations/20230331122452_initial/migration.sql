/*
  Warnings:

  - You are about to drop the column `draggable` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cardStyle` on the `Lane` table. All the data in the column will be lost.
  - You are about to drop the column `labelStyle` on the `Lane` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `Lane` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "draggable",
DROP COLUMN "style";

-- AlterTable
ALTER TABLE "Lane" DROP COLUMN "cardStyle",
DROP COLUMN "labelStyle",
DROP COLUMN "style";
