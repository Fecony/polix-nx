import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';

@ArgsType()
export class FindUniqueCityArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;
}
