import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportUncheckedCreateNestedManyWithoutUserInput } from '../report/report-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutSocialAccountInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput;
}
