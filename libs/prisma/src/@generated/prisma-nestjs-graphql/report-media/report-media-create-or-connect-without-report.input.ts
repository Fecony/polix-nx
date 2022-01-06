import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaCreateWithoutReportInput } from './report-media-create-without-report.input';

@InputType()
export class ReportMediaCreateOrConnectWithoutReportInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaCreateWithoutReportInput, {nullable:false})
    create!: ReportMediaCreateWithoutReportInput;
}
