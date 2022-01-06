import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@ArgsType()
export class DeleteOneReportArgs {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;
}
