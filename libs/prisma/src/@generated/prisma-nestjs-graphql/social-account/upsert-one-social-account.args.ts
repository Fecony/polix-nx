import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { SocialAccountCreateInput } from './social-account-create.input';
import { SocialAccountUpdateInput } from './social-account-update.input';

@ArgsType()
export class UpsertOneSocialAccountArgs {

    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: SocialAccountWhereUniqueInput;

    @Field(() => SocialAccountCreateInput, {nullable:false})
    create!: SocialAccountCreateInput;

    @Field(() => SocialAccountUpdateInput, {nullable:false})
    update!: SocialAccountUpdateInput;
}
