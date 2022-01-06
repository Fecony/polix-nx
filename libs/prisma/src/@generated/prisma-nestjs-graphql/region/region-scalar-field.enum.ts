import { registerEnumType } from '@nestjs/graphql';

export enum RegionScalarFieldEnum {
    id = "id",
    name = "name",
    countryId = "countryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RegionScalarFieldEnum, { name: 'RegionScalarFieldEnum', description: undefined })
