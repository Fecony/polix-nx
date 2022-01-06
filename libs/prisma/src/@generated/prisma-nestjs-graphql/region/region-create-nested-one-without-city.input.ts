import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCityInput } from './region-create-without-city.input';
import { RegionCreateOrConnectWithoutCityInput } from './region-create-or-connect-without-city.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutCityInput {

    @Field(() => RegionCreateWithoutCityInput, {nullable:true})
    create?: RegionCreateWithoutCityInput;

    @Field(() => RegionCreateOrConnectWithoutCityInput, {nullable:true})
    connectOrCreate?: RegionCreateOrConnectWithoutCityInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    connect?: RegionWhereUniqueInput;
}
