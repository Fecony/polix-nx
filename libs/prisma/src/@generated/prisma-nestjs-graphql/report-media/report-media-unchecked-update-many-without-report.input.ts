import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateWithoutReportInput } from './report-media-create-without-report.input';
import { ReportMediaCreateOrConnectWithoutReportInput } from './report-media-create-or-connect-without-report.input';
import { ReportMediaUpsertWithWhereUniqueWithoutReportInput } from './report-media-upsert-with-where-unique-without-report.input';
import { ReportMediaCreateManyReportInputEnvelope } from './report-media-create-many-report-input-envelope.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithWhereUniqueWithoutReportInput } from './report-media-update-with-where-unique-without-report.input';
import { ReportMediaUpdateManyWithWhereWithoutReportInput } from './report-media-update-many-with-where-without-report.input';
import { ReportMediaScalarWhereInput } from './report-media-scalar-where.input';

@InputType()
export class ReportMediaUncheckedUpdateManyWithoutReportInput {

    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;

    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;

    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutReportInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutReportInput>;

    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: ReportMediaCreateManyReportInputEnvelope;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutReportInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutReportInput>;

    @Field(() => [ReportMediaUpdateManyWithWhereWithoutReportInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutReportInput>;

    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}
