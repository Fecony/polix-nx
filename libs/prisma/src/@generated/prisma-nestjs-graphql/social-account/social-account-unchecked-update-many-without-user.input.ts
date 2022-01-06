import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountCreateWithoutUserInput } from './social-account-create-without-user.input';
import { SocialAccountCreateOrConnectWithoutUserInput } from './social-account-create-or-connect-without-user.input';
import { SocialAccountUpsertWithWhereUniqueWithoutUserInput } from './social-account-upsert-with-where-unique-without-user.input';
import { SocialAccountCreateManyUserInputEnvelope } from './social-account-create-many-user-input-envelope.input';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { SocialAccountUpdateWithWhereUniqueWithoutUserInput } from './social-account-update-with-where-unique-without-user.input';
import { SocialAccountUpdateManyWithWhereWithoutUserInput } from './social-account-update-many-with-where-without-user.input';
import { SocialAccountScalarWhereInput } from './social-account-scalar-where.input';

@InputType()
export class SocialAccountUncheckedUpdateManyWithoutUserInput {

    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;

    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;

    @Field(() => [SocialAccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<SocialAccountUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: SocialAccountCreateManyUserInputEnvelope;

    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    set?: Array<SocialAccountWhereUniqueInput>;

    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    disconnect?: Array<SocialAccountWhereUniqueInput>;

    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    delete?: Array<SocialAccountWhereUniqueInput>;

    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;

    @Field(() => [SocialAccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<SocialAccountUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SocialAccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<SocialAccountUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    deleteMany?: Array<SocialAccountScalarWhereInput>;
}
