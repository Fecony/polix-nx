import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountUpdateInput } from './social-account-update.input';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';

@ArgsType()
export class UpdateOneSocialAccountArgs {

    @Field(() => SocialAccountUpdateInput, {nullable:false})
    data!: SocialAccountUpdateInput;

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;
}
