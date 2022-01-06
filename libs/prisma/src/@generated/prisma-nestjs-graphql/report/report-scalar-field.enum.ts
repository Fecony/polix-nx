import { registerEnumType } from '@nestjs/graphql';

export enum ReportScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    cityId = "cityId"
}


registerEnumType(ReportScalarFieldEnum, { name: 'ReportScalarFieldEnum', description: undefined })
