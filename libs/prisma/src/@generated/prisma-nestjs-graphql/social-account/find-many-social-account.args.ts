import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialAccountWhereInput } from './social-account-where.input';
import { SocialAccountOrderByWithRelationInput } from './social-account-order-by-with-relation.input';
import { SocialAccountWhereUniqueInput } from './social-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SocialAccountScalarFieldEnum } from './social-account-scalar-field.enum';

@ArgsType()
export class FindManySocialAccountArgs {

    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: SocialAccountWhereInput;

    @Field(() => [SocialAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithRelationInput>;

    @Field(() => SocialAccountWhereUniqueInput, {nullable:true})
    cursor?: SocialAccountWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SocialAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SocialAccountScalarFieldEnum>;
}
