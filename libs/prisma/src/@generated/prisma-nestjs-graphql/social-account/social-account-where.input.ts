import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SocialAccountWhereInput {

    @Field(() => [SocialAccountWhereInput], {nullable:true})
    AND?: Array<SocialAccountWhereInput>;

    @Field(() => [SocialAccountWhereInput], {nullable:true})
    OR?: Array<SocialAccountWhereInput>;

    @Field(() => [SocialAccountWhereInput], {nullable:true})
    NOT?: Array<SocialAccountWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    provider?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
