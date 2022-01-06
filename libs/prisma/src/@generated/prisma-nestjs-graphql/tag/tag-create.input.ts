import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateNestedManyWithoutTagsInput } from '../report/report-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportCreateNestedManyWithoutTagsInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutTagsInput;
}
