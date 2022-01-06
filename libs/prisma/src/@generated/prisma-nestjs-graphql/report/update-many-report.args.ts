import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportUpdateManyMutationInput } from './report-update-many-mutation.input';
import { ReportWhereInput } from './report-where.input';

@ArgsType()
export class UpdateManyReportArgs {

    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: ReportUpdateManyMutationInput;

    @Field(() => ReportWhereInput, {nullable:true})
    where?: ReportWhereInput;
}
