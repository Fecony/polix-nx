import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedManyWithoutCountryInput } from '../region/region-create-nested-many-without-country.input';

@InputType()
export class CountryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RegionCreateNestedManyWithoutCountryInput, {nullable:true})
    region?: RegionCreateNestedManyWithoutCountryInput;
}
