import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';

@InputType()
export class CityCreateOrConnectWithoutRegionInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutRegionInput, {nullable:false})
    create!: CityCreateWithoutRegionInput;
}
