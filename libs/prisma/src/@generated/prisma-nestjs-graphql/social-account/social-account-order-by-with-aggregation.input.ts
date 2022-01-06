import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SocialAccountCountOrderByAggregateInput } from './social-account-count-order-by-aggregate.input';
import { SocialAccountAvgOrderByAggregateInput } from './social-account-avg-order-by-aggregate.input';
import { SocialAccountMaxOrderByAggregateInput } from './social-account-max-order-by-aggregate.input';
import { SocialAccountMinOrderByAggregateInput } from './social-account-min-order-by-aggregate.input';
import { SocialAccountSumOrderByAggregateInput } from './social-account-sum-order-by-aggregate.input';

@InputType()
export class SocialAccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SocialAccountCountOrderByAggregateInput, {nullable:true})
    _count?: SocialAccountCountOrderByAggregateInput;

    @Field(() => SocialAccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: SocialAccountAvgOrderByAggregateInput;

    @Field(() => SocialAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: SocialAccountMaxOrderByAggregateInput;

    @Field(() => SocialAccountMinOrderByAggregateInput, {nullable:true})
    _min?: SocialAccountMinOrderByAggregateInput;

    @Field(() => SocialAccountSumOrderByAggregateInput, {nullable:true})
    _sum?: SocialAccountSumOrderByAggregateInput;
}
