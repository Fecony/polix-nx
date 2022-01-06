import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MediaScalarWhereWithAggregatesInput {

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
