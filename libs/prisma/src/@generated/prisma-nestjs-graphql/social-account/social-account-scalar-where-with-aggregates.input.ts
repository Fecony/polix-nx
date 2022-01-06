import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SocialAccountScalarWhereWithAggregatesInput {

    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SocialAccountScalarWhereWithAggregatesInput>;

    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SocialAccountScalarWhereWithAggregatesInput>;

    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SocialAccountScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    provider?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
