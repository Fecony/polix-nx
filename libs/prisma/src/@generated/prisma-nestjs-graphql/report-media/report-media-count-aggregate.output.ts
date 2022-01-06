import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ReportMediaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @HideField()
    createdAt!: number;

    @HideField()
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    reportId!: number;

    @Field(() => Int, {nullable:false})
    mediaId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
