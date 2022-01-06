import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutReportsInput } from './tag-update-without-reports.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutReportsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutReportsInput, {nullable:false})
    data!: TagUpdateWithoutReportsInput;
}
