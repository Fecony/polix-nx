import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutSocialAccountInput } from './user-create-without-social-account.input';

@InputType()
export class UserCreateOrConnectWithoutSocialAccountInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:false})
    create!: UserCreateWithoutSocialAccountInput;
}
