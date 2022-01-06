import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RegionUncheckedCreateNestedManyWithoutCountryInput } from '../region/region-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RegionUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    region?: RegionUncheckedCreateNestedManyWithoutCountryInput;
}
