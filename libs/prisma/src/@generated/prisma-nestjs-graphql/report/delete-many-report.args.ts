import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';

@ArgsType()
export class DeleteManyReportArgs {

    @Field(() => ReportWhereInput, {nullable:true})
    where?: ReportWhereInput;
}
