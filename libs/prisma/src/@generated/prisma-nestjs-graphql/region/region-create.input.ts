import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateNestedOneWithoutRegionInput } from '../country/country-create-nested-one-without-region.input';
import { CityCreateNestedManyWithoutRegionInput } from '../city/city-create-nested-many-without-region.input';

@InputType()
export class RegionCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CountryCreateNestedOneWithoutRegionInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutRegionInput;

    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: CityCreateNestedManyWithoutRegionInput;
}
