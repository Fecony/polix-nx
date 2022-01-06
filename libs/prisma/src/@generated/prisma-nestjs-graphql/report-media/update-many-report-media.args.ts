import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaUpdateManyMutationInput } from './report-media-update-many-mutation.input';
import { ReportMediaWhereInput } from './report-media-where.input';

@ArgsType()
export class UpdateManyReportMediaArgs {

    @Field(() => ReportMediaUpdateManyMutationInput, {nullable:false})
    data!: ReportMediaUpdateManyMutationInput;

    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: ReportMediaWhereInput;
}
