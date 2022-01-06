import { registerEnumType } from '@nestjs/graphql';

export enum SocialAccountScalarFieldEnum {
    id = "id",
    provider = "provider",
    providerId = "providerId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SocialAccountScalarFieldEnum, { name: 'SocialAccountScalarFieldEnum', description: undefined })
