import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCityInput } from './region-create-without-city.input';
import { RegionCreateOrConnectWithoutCityInput } from './region-create-or-connect-without-city.input';
import { RegionUpsertWithoutCityInput } from './region-upsert-without-city.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithoutCityInput } from './region-update-without-city.input';

@InputType()
export class RegionUpdateOneRequiredWithoutCityInput {

    @Field(() => RegionCreateWithoutCityInput, {nullable:true})
    create?: RegionCreateWithoutCityInput;

    @Field(() => RegionCreateOrConnectWithoutCityInput, {nullable:true})
    connectOrCreate?: RegionCreateOrConnectWithoutCityInput;

    @Field(() => RegionUpsertWithoutCityInput, {nullable:true})
    upsert?: RegionUpsertWithoutCityInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    connect?: RegionWhereUniqueInput;

    @Field(() => RegionUpdateWithoutCityInput, {nullable:true})
    update?: RegionUpdateWithoutCityInput;
}
