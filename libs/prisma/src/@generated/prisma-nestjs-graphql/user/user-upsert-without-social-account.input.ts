import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSocialAccountInput } from './user-update-without-social-account.input';
import { UserCreateWithoutSocialAccountInput } from './user-create-without-social-account.input';

@InputType()
export class UserUpsertWithoutSocialAccountInput {

    @Field(() => UserUpdateWithoutSocialAccountInput, {nullable:false})
    update!: UserUpdateWithoutSocialAccountInput;

    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:false})
    create!: UserCreateWithoutSocialAccountInput;
}
