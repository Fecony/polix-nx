import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaCreateInput } from './report-media-create.input';

@ArgsType()
export class CreateOneReportMediaArgs {

    @Field(() => ReportMediaCreateInput, {nullable:false})
    data!: ReportMediaCreateInput;
}
