import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountCreateInput } from './social-account-create.input';

@ArgsType()
export class CreateOneSocialAccountArgs {

    @Field(() => SocialAccountCreateInput, {nullable:false})
    data!: SocialAccountCreateInput;
}
