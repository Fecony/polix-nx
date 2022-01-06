import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutReportsInput } from './tag-create-without-reports.input';

@InputType()
export class TagCreateOrConnectWithoutReportsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutReportsInput, {nullable:false})
    create!: TagCreateWithoutReportsInput;
}
