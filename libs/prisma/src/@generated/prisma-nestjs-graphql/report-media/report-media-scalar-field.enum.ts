import { registerEnumType } from '@nestjs/graphql';

export enum ReportMediaScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reportId = "reportId",
    mediaId = "mediaId"
}


registerEnumType(ReportMediaScalarFieldEnum, { name: 'ReportMediaScalarFieldEnum', description: undefined })
