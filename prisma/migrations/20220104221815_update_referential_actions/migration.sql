-- DropForeignKey
ALTER TABLE `cities` DROP FOREIGN KEY `cities_regionId_fkey`;

-- DropForeignKey
ALTER TABLE `regions` DROP FOREIGN KEY `regions_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `report_media` DROP FOREIGN KEY `report_media_mediaId_fkey`;

-- DropForeignKey
ALTER TABLE `report_media` DROP FOREIGN KEY `report_media_reportId_fkey`;

-- DropForeignKey
ALTER TABLE `report_tags` DROP FOREIGN KEY `report_tags_reportId_fkey`;

-- DropForeignKey
ALTER TABLE `report_tags` DROP FOREIGN KEY `report_tags_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `reports` DROP FOREIGN KEY `reports_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `reports` DROP FOREIGN KEY `reports_userId_fkey`;

-- DropForeignKey
ALTER TABLE `social_accounts` DROP FOREIGN KEY `social_accounts_userId_fkey`;

-- AlterTable
ALTER TABLE `reports` MODIFY `userId` INTEGER NULL,
    MODIFY `cityId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `social_accounts` ADD CONSTRAINT `social_accounts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `regions` ADD CONSTRAINT `regions_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cities` ADD CONSTRAINT `cities_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `report_tags` ADD CONSTRAINT `report_tags_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `reports`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report_tags` ADD CONSTRAINT `report_tags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report_media` ADD CONSTRAINT `report_media_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `reports`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report_media` ADD CONSTRAINT `report_media_mediaId_fkey` FOREIGN KEY (`mediaId`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
