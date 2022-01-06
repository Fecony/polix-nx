import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutReportsInput } from './tag-update-without-reports.input';
import { TagCreateWithoutReportsInput } from './tag-create-without-reports.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutReportsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutReportsInput, {nullable:false})
    update!: TagUpdateWithoutReportsInput;

    @Field(() => TagCreateWithoutReportsInput, {nullable:false})
    create!: TagCreateWithoutReportsInput;
}
