import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ReportScalarWhereInput {

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    AND?: Array<ReportScalarWhereInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    OR?: Array<ReportScalarWhereInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    NOT?: Array<ReportScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    cityId?: IntNullableFilter;
}
