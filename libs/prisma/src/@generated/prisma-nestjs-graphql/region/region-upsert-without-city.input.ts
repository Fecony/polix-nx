import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutCityInput } from './region-update-without-city.input';
import { RegionCreateWithoutCityInput } from './region-create-without-city.input';

@InputType()
export class RegionUpsertWithoutCityInput {

    @Field(() => RegionUpdateWithoutCityInput, {nullable:false})
    update!: RegionUpdateWithoutCityInput;

    @Field(() => RegionCreateWithoutCityInput, {nullable:false})
    create!: RegionCreateWithoutCityInput;
}
