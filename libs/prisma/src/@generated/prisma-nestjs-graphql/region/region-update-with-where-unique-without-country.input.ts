import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithoutCountryInput } from './region-update-without-country.input';

@InputType()
export class RegionUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;

    @Field(() => RegionUpdateWithoutCountryInput, {nullable:false})
    data!: RegionUpdateWithoutCountryInput;
}
