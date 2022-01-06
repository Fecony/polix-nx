import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereInput } from './social-account-where.input';
import { SocialAccountOrderByWithAggregationInput } from './social-account-order-by-with-aggregation.input';
import { SocialAccountScalarFieldEnum } from './social-account-scalar-field.enum';
import { SocialAccountScalarWhereWithAggregatesInput } from './social-account-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SocialAccountCountAggregateInput } from './social-account-count-aggregate.input';
import { SocialAccountAvgAggregateInput } from './social-account-avg-aggregate.input';
import { SocialAccountSumAggregateInput } from './social-account-sum-aggregate.input';
import { SocialAccountMinAggregateInput } from './social-account-min-aggregate.input';
import { SocialAccountMaxAggregateInput } from './social-account-max-aggregate.input';

@ArgsType()
export class SocialAccountGroupByArgs {

    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: SocialAccountWhereInput;

    @Field(() => [SocialAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithAggregationInput>;

    @Field(() => [SocialAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SocialAccountScalarFieldEnum>;

    @Field(() => SocialAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: SocialAccountScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SocialAccountCountAggregateInput, {nullable:true})
    _count?: SocialAccountCountAggregateInput;

    @Field(() => SocialAccountAvgAggregateInput, {nullable:true})
    _avg?: SocialAccountAvgAggregateInput;

    @Field(() => SocialAccountSumAggregateInput, {nullable:true})
    _sum?: SocialAccountSumAggregateInput;

    @Field(() => SocialAccountMinAggregateInput, {nullable:true})
    _min?: SocialAccountMinAggregateInput;

    @Field(() => SocialAccountMaxAggregateInput, {nullable:true})
    _max?: SocialAccountMaxAggregateInput;
}
