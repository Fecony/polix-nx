import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutTagsInput } from './report-create-without-tags.input';

@InputType()
export class ReportCreateOrConnectWithoutTagsInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutTagsInput, {nullable:false})
    create!: ReportCreateWithoutTagsInput;
}
