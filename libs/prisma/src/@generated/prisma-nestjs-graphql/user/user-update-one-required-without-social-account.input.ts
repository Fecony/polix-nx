import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSocialAccountInput } from './user-create-without-social-account.input';
import { UserCreateOrConnectWithoutSocialAccountInput } from './user-create-or-connect-without-social-account.input';
import { UserUpsertWithoutSocialAccountInput } from './user-upsert-without-social-account.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSocialAccountInput } from './user-update-without-social-account.input';

@InputType()
export class UserUpdateOneRequiredWithoutSocialAccountInput {

    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:true})
    create?: UserCreateWithoutSocialAccountInput;

    @Field(() => UserCreateOrConnectWithoutSocialAccountInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountInput;

    @Field(() => UserUpsertWithoutSocialAccountInput, {nullable:true})
    upsert?: UserUpsertWithoutSocialAccountInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSocialAccountInput, {nullable:true})
    update?: UserUpdateWithoutSocialAccountInput;
}
