import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RegionScalarWhereInput {

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    AND?: Array<RegionScalarWhereInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    OR?: Array<RegionScalarWhereInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    NOT?: Array<RegionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    countryId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
