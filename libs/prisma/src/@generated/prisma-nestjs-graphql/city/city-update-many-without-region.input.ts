import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';
import { CityCreateOrConnectWithoutRegionInput } from './city-create-or-connect-without-region.input';
import { CityUpsertWithWhereUniqueWithoutRegionInput } from './city-upsert-with-where-unique-without-region.input';
import { CityCreateManyRegionInputEnvelope } from './city-create-many-region-input-envelope.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithWhereUniqueWithoutRegionInput } from './city-update-with-where-unique-without-region.input';
import { CityUpdateManyWithWhereWithoutRegionInput } from './city-update-many-with-where-without-region.input';
import { CityScalarWhereInput } from './city-scalar-where.input';

@InputType()
export class CityUpdateManyWithoutRegionInput {

    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;

    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;

    @Field(() => [CityUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    upsert?: Array<CityUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: CityCreateManyRegionInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    set?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    disconnect?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    delete?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;

    @Field(() => [CityUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    update?: Array<CityUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [CityUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    updateMany?: Array<CityUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    deleteMany?: Array<CityScalarWhereInput>;
}
