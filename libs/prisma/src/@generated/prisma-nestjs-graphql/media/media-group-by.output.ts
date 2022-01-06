import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MediaCountAggregate } from './media-count-aggregate.output';
import { MediaAvgAggregate } from './media-avg-aggregate.output';
import { MediaSumAggregate } from './media-sum-aggregate.output';
import { MediaMinAggregate } from './media-min-aggregate.output';
import { MediaMaxAggregate } from './media-max-aggregate.output';

@ObjectType()
export class MediaGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MediaCountAggregate, {nullable:true})
    _count?: MediaCountAggregate;

    @Field(() => MediaAvgAggregate, {nullable:true})
    _avg?: MediaAvgAggregate;

    @Field(() => MediaSumAggregate, {nullable:true})
    _sum?: MediaSumAggregate;

    @Field(() => MediaMinAggregate, {nullable:true})
    _min?: MediaMinAggregate;

    @Field(() => MediaMaxAggregate, {nullable:true})
    _max?: MediaMaxAggregate;
}
