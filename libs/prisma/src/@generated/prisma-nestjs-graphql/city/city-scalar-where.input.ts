import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CityScalarWhereInput {

    @Field(() => [CityScalarWhereInput], {nullable:true})
    AND?: Array<CityScalarWhereInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    OR?: Array<CityScalarWhereInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    NOT?: Array<CityScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    regionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
