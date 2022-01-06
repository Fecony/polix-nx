import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateWithoutReportInput } from './report-media-create-without-report.input';
import { ReportMediaCreateOrConnectWithoutReportInput } from './report-media-create-or-connect-without-report.input';
import { ReportMediaCreateManyReportInputEnvelope } from './report-media-create-many-report-input-envelope.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';

@InputType()
export class ReportMediaCreateNestedManyWithoutReportInput {

    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;

    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;

    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: ReportMediaCreateManyReportInputEnvelope;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}
