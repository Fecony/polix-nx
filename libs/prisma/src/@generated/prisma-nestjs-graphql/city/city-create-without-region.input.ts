import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateNestedManyWithoutCityInput } from '../report/report-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutRegionInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutCityInput;
}
