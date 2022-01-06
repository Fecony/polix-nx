import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReportMediaScalarWhereWithAggregatesInput {

    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportMediaScalarWhereWithAggregatesInput>;

    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportMediaScalarWhereWithAggregatesInput>;

    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportMediaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reportId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    mediaId?: IntWithAggregatesFilter;
}
