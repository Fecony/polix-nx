import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutTagsInput } from './report-update-without-tags.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutTagsInput, {nullable:false})
    data!: ReportUpdateWithoutTagsInput;
}
