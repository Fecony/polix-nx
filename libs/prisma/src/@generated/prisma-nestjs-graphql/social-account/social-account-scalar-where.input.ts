import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SocialAccountScalarWhereInput {

    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    AND?: Array<SocialAccountScalarWhereInput>;

    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    OR?: Array<SocialAccountScalarWhereInput>;

    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    NOT?: Array<SocialAccountScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    provider?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
