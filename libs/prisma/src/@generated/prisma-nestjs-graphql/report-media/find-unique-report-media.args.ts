import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';

@ArgsType()
export class FindUniqueReportMediaArgs {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;
}
