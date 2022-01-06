import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialAccountCreateNestedManyWithoutUserInput } from '../social-account/social-account-create-nested-many-without-user.input';
import { ReportCreateNestedManyWithoutUserInput } from '../report/report-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SocialAccountCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: SocialAccountCreateNestedManyWithoutUserInput;

    @Field(() => ReportCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutUserInput;
}
