import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutUserInput } from './report-update-without-user.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutUserInput, {nullable:false})
    data!: ReportUpdateWithoutUserInput;
}
