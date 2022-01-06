import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithoutReportInput } from './report-media-update-without-report.input';

@InputType()
export class ReportMediaUpdateWithWhereUniqueWithoutReportInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaUpdateWithoutReportInput, {nullable:false})
    data!: ReportMediaUpdateWithoutReportInput;
}
