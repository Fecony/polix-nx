import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ReportMediaMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    reportId?: number;

    @Field(() => Int, {nullable:true})
    mediaId?: number;
}
