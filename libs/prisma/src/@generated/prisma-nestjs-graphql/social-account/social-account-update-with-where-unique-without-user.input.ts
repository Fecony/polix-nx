import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { SocialAccountUpdateWithoutUserInput } from './social-account-update-without-user.input';

@InputType()
export class SocialAccountUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;

    @Field(() => SocialAccountUpdateWithoutUserInput, {nullable:false})
    data!: SocialAccountUpdateWithoutUserInput;
}
