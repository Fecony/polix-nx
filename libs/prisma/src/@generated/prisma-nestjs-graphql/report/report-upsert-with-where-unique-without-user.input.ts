import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutUserInput } from './report-update-without-user.input';
import { ReportCreateWithoutUserInput } from './report-create-without-user.input';

@InputType()
export class ReportUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutUserInput, {nullable:false})
    update!: ReportUpdateWithoutUserInput;

    @Field(() => ReportCreateWithoutUserInput, {nullable:false})
    create!: ReportCreateWithoutUserInput;
}
