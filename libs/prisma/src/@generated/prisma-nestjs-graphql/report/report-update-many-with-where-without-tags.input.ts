import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportScalarWhereInput } from './report-scalar-where.input';
import { ReportUpdateManyMutationInput } from './report-update-many-mutation.input';

@InputType()
export class ReportUpdateManyWithWhereWithoutTagsInput {

    @Field(() => ReportScalarWhereInput, {nullable:false})
    where!: ReportScalarWhereInput;

    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: ReportUpdateManyMutationInput;
}
