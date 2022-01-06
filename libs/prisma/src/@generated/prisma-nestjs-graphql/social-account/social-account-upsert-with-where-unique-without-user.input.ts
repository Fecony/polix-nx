import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { SocialAccountUpdateWithoutUserInput } from './social-account-update-without-user.input';
import { SocialAccountCreateWithoutUserInput } from './social-account-create-without-user.input';

@InputType()
export class SocialAccountUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;

    @Field(() => SocialAccountUpdateWithoutUserInput, {nullable:false})
    update!: SocialAccountUpdateWithoutUserInput;

    @Field(() => SocialAccountCreateWithoutUserInput, {nullable:false})
    create!: SocialAccountCreateWithoutUserInput;
}
