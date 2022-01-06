import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReportRelationFilter } from '../report/report-relation-filter.input';
import { MediaRelationFilter } from '../media/media-relation-filter.input';

@InputType()
export class ReportMediaWhereInput {

    @Field(() => [ReportMediaWhereInput], {nullable:true})
    AND?: Array<ReportMediaWhereInput>;

    @Field(() => [ReportMediaWhereInput], {nullable:true})
    OR?: Array<ReportMediaWhereInput>;

    @Field(() => [ReportMediaWhereInput], {nullable:true})
    NOT?: Array<ReportMediaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ReportRelationFilter, {nullable:true})
    report?: ReportRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    reportId?: IntFilter;

    @Field(() => MediaRelationFilter, {nullable:true})
    media?: MediaRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    mediaId?: IntFilter;
}
