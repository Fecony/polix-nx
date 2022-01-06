import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaCreateInput } from './report-media-create.input';
import { ReportMediaUpdateInput } from './report-media-update.input';

@ArgsType()
export class UpsertOneReportMediaArgs {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaCreateInput, {nullable:false})
    create!: ReportMediaCreateInput;

    @Field(() => ReportMediaUpdateInput, {nullable:false})
    update!: ReportMediaUpdateInput;
}
