import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RegionScalarWhereWithAggregatesInput {

    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RegionScalarWhereWithAggregatesInput>;

    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RegionScalarWhereWithAggregatesInput>;

    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RegionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    countryId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
