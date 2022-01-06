import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutRegionInput } from './country-create-without-region.input';
import { CountryCreateOrConnectWithoutRegionInput } from './country-create-or-connect-without-region.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutRegionInput {

    @Field(() => CountryCreateWithoutRegionInput, {nullable:true})
    create?: CountryCreateWithoutRegionInput;

    @Field(() => CountryCreateOrConnectWithoutRegionInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;
}
