import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaWhereInput } from './report-media-where.input';

@ArgsType()
export class DeleteManyReportMediaArgs {

    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: ReportMediaWhereInput;
}
