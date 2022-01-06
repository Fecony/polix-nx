import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportUpdateInput } from './report-update.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@ArgsType()
export class UpdateOneReportArgs {

    @Field(() => ReportUpdateInput, {nullable:false})
    data!: ReportUpdateInput;

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;
}
