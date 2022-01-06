import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionCreateWithoutCountryInput } from './region-create-without-country.input';

@InputType()
export class RegionCreateOrConnectWithoutCountryInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateWithoutCountryInput, {nullable:false})
    create!: RegionCreateWithoutCountryInput;
}
