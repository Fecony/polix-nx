import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCreateInput } from './report-create.input';

@ArgsType()
export class CreateOneReportArgs {

    @Field(() => ReportCreateInput, {nullable:false})
    data!: ReportCreateInput;
}
