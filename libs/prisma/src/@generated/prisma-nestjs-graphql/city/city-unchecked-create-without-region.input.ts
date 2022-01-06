import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportUncheckedCreateNestedManyWithoutCityInput } from '../report/report-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateWithoutRegionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: ReportUncheckedCreateNestedManyWithoutCityInput;
}
