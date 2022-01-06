import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutRegionInput } from './country-update-without-region.input';
import { CountryCreateWithoutRegionInput } from './country-create-without-region.input';

@InputType()
export class CountryUpsertWithoutRegionInput {

    @Field(() => CountryUpdateWithoutRegionInput, {nullable:false})
    update!: CountryUpdateWithoutRegionInput;

    @Field(() => CountryCreateWithoutRegionInput, {nullable:false})
    create!: CountryCreateWithoutRegionInput;
}
