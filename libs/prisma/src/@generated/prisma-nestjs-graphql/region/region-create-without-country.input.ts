import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedManyWithoutRegionInput } from '../city/city-create-nested-many-without-region.input';

@InputType()
export class RegionCreateWithoutCountryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: CityCreateNestedManyWithoutRegionInput;
}
