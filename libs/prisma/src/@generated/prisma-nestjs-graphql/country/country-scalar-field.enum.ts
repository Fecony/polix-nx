import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
