import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateInput } from './report-create.input';
import { ReportUpdateInput } from './report-update.input';

@ArgsType()
export class UpsertOneReportArgs {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateInput, {nullable:false})
    create!: ReportCreateInput;

    @Field(() => ReportUpdateInput, {nullable:false})
    update!: ReportUpdateInput;
}
