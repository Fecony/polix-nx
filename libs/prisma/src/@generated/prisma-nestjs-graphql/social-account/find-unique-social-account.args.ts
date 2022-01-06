import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';

@ArgsType()
export class FindUniqueSocialAccountArgs {

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;
}
