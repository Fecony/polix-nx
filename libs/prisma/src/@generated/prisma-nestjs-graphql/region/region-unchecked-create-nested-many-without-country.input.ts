import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCountryInput } from './region-create-without-country.input';
import { RegionCreateOrConnectWithoutCountryInput } from './region-create-or-connect-without-country.input';
import { RegionCreateManyCountryInputEnvelope } from './region-create-many-country-input-envelope.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;

    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;

    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: RegionCreateManyCountryInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;
}
