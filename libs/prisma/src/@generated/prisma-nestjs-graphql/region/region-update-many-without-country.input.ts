import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCountryInput } from './region-create-without-country.input';
import { RegionCreateOrConnectWithoutCountryInput } from './region-create-or-connect-without-country.input';
import { RegionUpsertWithWhereUniqueWithoutCountryInput } from './region-upsert-with-where-unique-without-country.input';
import { RegionCreateManyCountryInputEnvelope } from './region-create-many-country-input-envelope.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutCountryInput } from './region-update-with-where-unique-without-country.input';
import { RegionUpdateManyWithWhereWithoutCountryInput } from './region-update-many-with-where-without-country.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUpdateManyWithoutCountryInput {

    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;

    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: RegionCreateManyCountryInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    set?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    disconnect?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    delete?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<RegionUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<RegionUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    deleteMany?: Array<RegionScalarWhereInput>;
}
