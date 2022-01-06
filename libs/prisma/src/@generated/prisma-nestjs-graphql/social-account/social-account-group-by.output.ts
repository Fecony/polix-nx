import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialAccountCountAggregate } from './social-account-count-aggregate.output';
import { SocialAccountAvgAggregate } from './social-account-avg-aggregate.output';
import { SocialAccountSumAggregate } from './social-account-sum-aggregate.output';
import { SocialAccountMinAggregate } from './social-account-min-aggregate.output';
import { SocialAccountMaxAggregate } from './social-account-max-aggregate.output';

@ObjectType()
export class SocialAccountGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    provider!: bigint | number;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SocialAccountCountAggregate, {nullable:true})
    _count?: SocialAccountCountAggregate;

    @Field(() => SocialAccountAvgAggregate, {nullable:true})
    _avg?: SocialAccountAvgAggregate;

    @Field(() => SocialAccountSumAggregate, {nullable:true})
    _sum?: SocialAccountSumAggregate;

    @Field(() => SocialAccountMinAggregate, {nullable:true})
    _min?: SocialAccountMinAggregate;

    @Field(() => SocialAccountMaxAggregate, {nullable:true})
    _max?: SocialAccountMaxAggregate;
}
