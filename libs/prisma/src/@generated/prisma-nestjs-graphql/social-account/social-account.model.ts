import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SocialAccount {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    provider!: bigint;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @HideField()
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
