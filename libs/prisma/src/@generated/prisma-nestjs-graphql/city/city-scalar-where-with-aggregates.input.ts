import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CityScalarWhereWithAggregatesInput {

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    regionId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
