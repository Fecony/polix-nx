import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereInput } from './social-account-where.input';

@ArgsType()
export class DeleteManySocialAccountArgs {

    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: SocialAccountWhereInput;
}
