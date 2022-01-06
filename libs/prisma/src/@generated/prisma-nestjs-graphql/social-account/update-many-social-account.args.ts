import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountUpdateManyMutationInput } from './social-account-update-many-mutation.input';
import { SocialAccountWhereInput } from './social-account-where.input';

@ArgsType()
export class UpdateManySocialAccountArgs {

    @Field(() => SocialAccountUpdateManyMutationInput, {nullable:false})
    data!: SocialAccountUpdateManyMutationInput;

    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: SocialAccountWhereInput;
}
