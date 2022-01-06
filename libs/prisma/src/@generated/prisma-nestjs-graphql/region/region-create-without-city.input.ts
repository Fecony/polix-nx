import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateNestedOneWithoutRegionInput } from '../country/country-create-nested-one-without-region.input';

@InputType()
export class RegionCreateWithoutCityInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CountryCreateNestedOneWithoutRegionInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutRegionInput;
}
