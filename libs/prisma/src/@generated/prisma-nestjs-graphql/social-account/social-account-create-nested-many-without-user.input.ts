import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountCreateWithoutUserInput } from './social-account-create-without-user.input';
import { SocialAccountCreateOrConnectWithoutUserInput } from './social-account-create-or-connect-without-user.input';
import { SocialAccountCreateManyUserInputEnvelope } from './social-account-create-many-user-input-envelope.input';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';

@InputType()
export class SocialAccountCreateNestedManyWithoutUserInput {

    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;

    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;

    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: SocialAccountCreateManyUserInputEnvelope;

    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;
}
