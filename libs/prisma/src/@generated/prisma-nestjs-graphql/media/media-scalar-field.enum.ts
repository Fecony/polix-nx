import { registerEnumType } from '@nestjs/graphql';

export enum MediaScalarFieldEnum {
    id = "id",
    path = "path",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
