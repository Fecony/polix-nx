import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SocialAccountCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    provider!: bigint | number;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
