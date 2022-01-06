import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
