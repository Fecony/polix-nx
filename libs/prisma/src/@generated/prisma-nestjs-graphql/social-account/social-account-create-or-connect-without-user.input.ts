import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { SocialAccountCreateWithoutUserInput } from './social-account-create-without-user.input';

@InputType()
export class SocialAccountCreateOrConnectWithoutUserInput {

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;

    @Field(() => SocialAccountCreateWithoutUserInput, {nullable:false})
    create!: SocialAccountCreateWithoutUserInput;
}
