import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';
import { CityCreateNestedOneWithoutReportsInput } from '../city/city-create-nested-one-without-reports.input';
import { TagCreateNestedManyWithoutReportsInput } from '../tag/tag-create-nested-many-without-reports.input';

@InputType()
export class ReportCreateWithoutMediaInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReportsInput;

    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: CityCreateNestedOneWithoutReportsInput;

    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutReportsInput;
}
