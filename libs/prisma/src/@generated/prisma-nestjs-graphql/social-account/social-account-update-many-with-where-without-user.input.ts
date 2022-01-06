import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountScalarWhereInput } from './social-account-scalar-where.input';
import { SocialAccountUpdateManyMutationInput } from './social-account-update-many-mutation.input';

@InputType()
export class SocialAccountUpdateManyWithWhereWithoutUserInput {

    @Field(() => SocialAccountScalarWhereInput, {nullable:false})
    where!: SocialAccountScalarWhereInput;

    @Field(() => SocialAccountUpdateManyMutationInput, {nullable:false})
    data!: SocialAccountUpdateManyMutationInput;
}
