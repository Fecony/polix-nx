import { registerEnumType } from '@nestjs/graphql';

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    regionId = "regionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
