/*
  Warnings:

  - You are about to drop the column `songId` on the `Playlist` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Playlist_name_key";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "songId";

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
