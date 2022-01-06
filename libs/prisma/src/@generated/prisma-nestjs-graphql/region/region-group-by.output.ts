import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RegionCountAggregate } from './region-count-aggregate.output';
import { RegionAvgAggregate } from './region-avg-aggregate.output';
import { RegionSumAggregate } from './region-sum-aggregate.output';
import { RegionMinAggregate } from './region-min-aggregate.output';
import { RegionMaxAggregate } from './region-max-aggregate.output';

@ObjectType()
export class RegionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RegionCountAggregate, {nullable:true})
    _count?: RegionCountAggregate;

    @Field(() => RegionAvgAggregate, {nullable:true})
    _avg?: RegionAvgAggregate;

    @Field(() => RegionSumAggregate, {nullable:true})
    _sum?: RegionSumAggregate;

    @Field(() => RegionMinAggregate, {nullable:true})
    _min?: RegionMinAggregate;

    @Field(() => RegionMaxAggregate, {nullable:true})
    _max?: RegionMaxAggregate;
}
