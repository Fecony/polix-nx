import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutUserInput } from './report-create-without-user.input';

@InputType()
export class ReportCreateOrConnectWithoutUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutUserInput, {nullable:false})
    create!: ReportCreateWithoutUserInput;
}
