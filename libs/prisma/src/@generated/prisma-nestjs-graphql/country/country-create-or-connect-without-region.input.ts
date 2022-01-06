import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateWithoutRegionInput } from './country-create-without-region.input';

@InputType()
export class CountryCreateOrConnectWithoutRegionInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateWithoutRegionInput, {nullable:false})
    create!: CountryCreateWithoutRegionInput;
}
