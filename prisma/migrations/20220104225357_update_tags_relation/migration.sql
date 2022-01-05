/*
  Warnings:

  - You are about to drop the `report_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `report_tags` DROP FOREIGN KEY `report_tags_reportId_fkey`;

-- DropForeignKey
ALTER TABLE `report_tags` DROP FOREIGN KEY `report_tags_tagId_fkey`;

-- DropTable
DROP TABLE `report_tags`;

-- CreateTable
CREATE TABLE `_ReportToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReportToTag_AB_unique`(`A`, `B`),
    INDEX `_ReportToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ReportToTag` ADD FOREIGN KEY (`A`) REFERENCES `reports`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReportToTag` ADD FOREIGN KEY (`B`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
