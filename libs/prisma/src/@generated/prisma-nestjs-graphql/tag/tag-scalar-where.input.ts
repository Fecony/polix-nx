import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TagScalarWhereInput {

    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
