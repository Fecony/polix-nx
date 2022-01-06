import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaUpdateInput } from './report-media-update.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';

@ArgsType()
export class UpdateOneReportMediaArgs {

    @Field(() => ReportMediaUpdateInput, {nullable:false})
    data!: ReportMediaUpdateInput;

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;
}
