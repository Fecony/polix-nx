import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountCreateManyInput } from './social-account-create-many.input';

@ArgsType()
export class CreateManySocialAccountArgs {

    @Field(() => [SocialAccountCreateManyInput], {nullable:false})
    data!: Array<SocialAccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
