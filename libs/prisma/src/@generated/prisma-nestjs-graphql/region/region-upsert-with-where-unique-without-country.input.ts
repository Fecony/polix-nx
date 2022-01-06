import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithoutCountryInput } from './region-update-without-country.input';
import { RegionCreateWithoutCountryInput } from './region-create-without-country.input';

@InputType()
export class RegionUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;

    @Field(() => RegionUpdateWithoutCountryInput, {nullable:false})
    update!: RegionUpdateWithoutCountryInput;

    @Field(() => RegionCreateWithoutCountryInput, {nullable:false})
    create!: RegionCreateWithoutCountryInput;
}
