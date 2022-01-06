import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountWhereInput } from './social-account-where.input';

@InputType()
export class SocialAccountListRelationFilter {

    @Field(() => SocialAccountWhereInput, {nullable:true})
    every?: SocialAccountWhereInput;

    @Field(() => SocialAccountWhereInput, {nullable:true})
    some?: SocialAccountWhereInput;

    @Field(() => SocialAccountWhereInput, {nullable:true})
    none?: SocialAccountWhereInput;
}
