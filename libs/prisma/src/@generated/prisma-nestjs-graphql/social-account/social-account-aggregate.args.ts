import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereInput } from './social-account-where.input';
import { SocialAccountOrderByWithRelationInput } from './social-account-order-by-with-relation.input';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SocialAccountCountAggregateInput } from './social-account-count-aggregate.input';
import { SocialAccountAvgAggregateInput } from './social-account-avg-aggregate.input';
import { SocialAccountSumAggregateInput } from './social-account-sum-aggregate.input';
import { SocialAccountMinAggregateInput } from './social-account-min-aggregate.input';
import { SocialAccountMaxAggregateInput } from './social-account-max-aggregate.input';

@ArgsType()
export class SocialAccountAggregateArgs {

    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: SocialAccountWhereInput;

    @Field(() => [SocialAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithRelationInput>;

    @Field(() => SocialAccountWhereUniqueInput, {nullable:true})
    cursor?: SocialAccountWhereUniqueInput;

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
