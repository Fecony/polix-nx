import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';
import { CityCreateOrConnectWithoutRegionInput } from './city-create-or-connect-without-region.input';
import { CityCreateManyRegionInputEnvelope } from './city-create-many-region-input-envelope.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;

    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;

    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: CityCreateManyRegionInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;
}
