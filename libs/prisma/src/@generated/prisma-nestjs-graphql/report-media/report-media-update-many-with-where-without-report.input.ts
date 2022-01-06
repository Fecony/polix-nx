import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaScalarWhereInput } from './report-media-scalar-where.input';
import { ReportMediaUpdateManyMutationInput } from './report-media-update-many-mutation.input';

@InputType()
export class ReportMediaUpdateManyWithWhereWithoutReportInput {

    @Field(() => ReportMediaScalarWhereInput, {nullable:false})
    where!: ReportMediaScalarWhereInput;

    @Field(() => ReportMediaUpdateManyMutationInput, {nullable:false})
    data!: ReportMediaUpdateManyMutationInput;
}
