import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReportMediaScalarWhereInput {

    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    AND?: Array<ReportMediaScalarWhereInput>;

    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    OR?: Array<ReportMediaScalarWhereInput>;

    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    NOT?: Array<ReportMediaScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    reportId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    mediaId?: IntFilter;
}
