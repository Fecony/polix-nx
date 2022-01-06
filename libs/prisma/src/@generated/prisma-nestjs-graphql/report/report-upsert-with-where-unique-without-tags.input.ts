import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutTagsInput } from './report-update-without-tags.input';
import { ReportCreateWithoutTagsInput } from './report-create-without-tags.input';

@InputType()
export class ReportUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutTagsInput, {nullable:false})
    update!: ReportUpdateWithoutTagsInput;

    @Field(() => ReportCreateWithoutTagsInput, {nullable:false})
    create!: ReportCreateWithoutTagsInput;
}
