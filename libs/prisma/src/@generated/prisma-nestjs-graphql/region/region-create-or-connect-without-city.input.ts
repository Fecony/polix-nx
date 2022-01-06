import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionCreateWithoutCityInput } from './region-create-without-city.input';

@InputType()
export class RegionCreateOrConnectWithoutCityInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateWithoutCityInput, {nullable:false})
    create!: RegionCreateWithoutCityInput;
}
