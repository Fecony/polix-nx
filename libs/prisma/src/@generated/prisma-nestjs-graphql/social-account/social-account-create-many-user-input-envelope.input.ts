import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountCreateManyUserInput } from './social-account-create-many-user.input';

@InputType()
export class SocialAccountCreateManyUserInputEnvelope {

    @Field(() => [SocialAccountCreateManyUserInput], {nullable:false})
    data!: Array<SocialAccountCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
