import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithoutRegionInput } from './city-update-without-region.input';

@InputType()
export class CityUpdateWithWhereUniqueWithoutRegionInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;

    @Field(() => CityUpdateWithoutRegionInput, {nullable:false})
    data!: CityUpdateWithoutRegionInput;
}
