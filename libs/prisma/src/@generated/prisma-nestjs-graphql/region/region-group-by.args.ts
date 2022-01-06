import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { RegionOrderByWithAggregationInput } from './region-order-by-with-aggregation.input';
import { RegionScalarFieldEnum } from './region-scalar-field.enum';
import { RegionScalarWhereWithAggregatesInput } from './region-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RegionCountAggregateInput } from './region-count-aggregate.input';
import { RegionAvgAggregateInput } from './region-avg-aggregate.input';
import { RegionSumAggregateInput } from './region-sum-aggregate.input';
import { RegionMinAggregateInput } from './region-min-aggregate.input';
import { RegionMaxAggregateInput } from './region-max-aggregate.input';

@ArgsType()
export class RegionGroupByArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    where?: RegionWhereInput;

    @Field(() => [RegionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithAggregationInput>;

    @Field(() => [RegionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RegionScalarFieldEnum>;

    @Field(() => RegionScalarWhereWithAggregatesInput, {nullable:true})
    having?: RegionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RegionCountAggregateInput, {nullable:true})
    _count?: RegionCountAggregateInput;

    @Field(() => RegionAvgAggregateInput, {nullable:true})
    _avg?: RegionAvgAggregateInput;

    @Field(() => RegionSumAggregateInput, {nullable:true})
    _sum?: RegionSumAggregateInput;

    @Field(() => RegionMinAggregateInput, {nullable:true})
    _min?: RegionMinAggregateInput;

    @Field(() => RegionMaxAggregateInput, {nullable:true})
    _max?: RegionMaxAggregateInput;
}
