/*
  Warnings:

  - A unique constraint covering the columns `[season_id,number]` on the table `episodes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "episodes_season_id_number_key" ON "episodes"("season_id", "number");
