import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedOneWithoutCityInput } from '../region/region-create-nested-one-without-city.input';
import { ReportCreateNestedManyWithoutCityInput } from '../report/report-create-nested-many-without-city.input';

@InputType()
export class CityCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RegionCreateNestedOneWithoutCityInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutCityInput;

    @Field(() => ReportCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutCityInput;
}
