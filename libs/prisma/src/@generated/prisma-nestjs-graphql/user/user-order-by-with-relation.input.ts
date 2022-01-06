import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SocialAccountOrderByRelationAggregateInput } from '../social-account/social-account-order-by-relation-aggregate.input';
import { ReportOrderByRelationAggregateInput } from '../report/report-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SocialAccountOrderByRelationAggregateInput, {nullable:true})
    SocialAccount?: SocialAccountOrderByRelationAggregateInput;

    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ReportOrderByRelationAggregateInput;
}
