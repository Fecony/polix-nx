import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutRegionInput } from './country-create-without-region.input';
import { CountryCreateOrConnectWithoutRegionInput } from './country-create-or-connect-without-region.input';
import { CountryUpsertWithoutRegionInput } from './country-upsert-without-region.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithoutRegionInput } from './country-update-without-region.input';

@InputType()
export class CountryUpdateOneRequiredWithoutRegionInput {

    @Field(() => CountryCreateWithoutRegionInput, {nullable:true})
    create?: CountryCreateWithoutRegionInput;

    @Field(() => CountryCreateOrConnectWithoutRegionInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput;

    @Field(() => CountryUpsertWithoutRegionInput, {nullable:true})
    upsert?: CountryUpsertWithoutRegionInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;

    @Field(() => CountryUpdateWithoutRegionInput, {nullable:true})
    update?: CountryUpdateWithoutRegionInput;
}
