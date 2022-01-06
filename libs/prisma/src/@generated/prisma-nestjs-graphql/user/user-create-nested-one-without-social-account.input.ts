import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSocialAccountInput } from './user-create-without-social-account.input';
import { UserCreateOrConnectWithoutSocialAccountInput } from './user-create-or-connect-without-social-account.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSocialAccountInput {

    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:true})
    create?: UserCreateWithoutSocialAccountInput;

    @Field(() => UserCreateOrConnectWithoutSocialAccountInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
