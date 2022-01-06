import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSocialAccountInput } from '../user/user-create-nested-one-without-social-account.input';

@InputType()
export class SocialAccountCreateInput {

    @Field(() => String, {nullable:false})
    provider!: bigint | number;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutSocialAccountInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSocialAccountInput;
}
