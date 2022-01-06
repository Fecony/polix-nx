import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithoutReportInput } from './report-media-update-without-report.input';
import { ReportMediaCreateWithoutReportInput } from './report-media-create-without-report.input';

@InputType()
export class ReportMediaUpsertWithWhereUniqueWithoutReportInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaUpdateWithoutReportInput, {nullable:false})
    update!: ReportMediaUpdateWithoutReportInput;

    @Field(() => ReportMediaCreateWithoutReportInput, {nullable:false})
    create!: ReportMediaCreateWithoutReportInput;
}
