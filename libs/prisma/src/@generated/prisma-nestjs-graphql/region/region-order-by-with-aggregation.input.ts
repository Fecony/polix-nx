import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegionCountOrderByAggregateInput } from './region-count-order-by-aggregate.input';
import { RegionAvgOrderByAggregateInput } from './region-avg-order-by-aggregate.input';
import { RegionMaxOrderByAggregateInput } from './region-max-order-by-aggregate.input';
import { RegionMinOrderByAggregateInput } from './region-min-order-by-aggregate.input';
import { RegionSumOrderByAggregateInput } from './region-sum-order-by-aggregate.input';

@InputType()
export class RegionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RegionCountOrderByAggregateInput, {nullable:true})
    _count?: RegionCountOrderByAggregateInput;

    @Field(() => RegionAvgOrderByAggregateInput, {nullable:true})
    _avg?: RegionAvgOrderByAggregateInput;

    @Field(() => RegionMaxOrderByAggregateInput, {nullable:true})
    _max?: RegionMaxOrderByAggregateInput;

    @Field(() => RegionMinOrderByAggregateInput, {nullable:true})
    _min?: RegionMinOrderByAggregateInput;

    @Field(() => RegionSumOrderByAggregateInput, {nullable:true})
    _sum?: RegionSumOrderByAggregateInput;
}
