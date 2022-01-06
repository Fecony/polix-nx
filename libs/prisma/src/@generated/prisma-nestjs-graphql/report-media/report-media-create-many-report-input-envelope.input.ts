import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateManyReportInput } from './report-media-create-many-report.input';

@InputType()
export class ReportMediaCreateManyReportInputEnvelope {

    @Field(() => [ReportMediaCreateManyReportInput], {nullable:false})
    data!: Array<ReportMediaCreateManyReportInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
