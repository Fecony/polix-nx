import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class MediaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    path!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @HideField()
    createdAt!: number;

    @HideField()
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
