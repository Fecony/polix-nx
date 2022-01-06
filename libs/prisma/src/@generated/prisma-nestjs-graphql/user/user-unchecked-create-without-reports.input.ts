import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SocialAccountUncheckedCreateNestedManyWithoutUserInput } from '../social-account/social-account-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutReportsInput {

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

    @Field(() => SocialAccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: SocialAccountUncheckedCreateNestedManyWithoutUserInput;
}
