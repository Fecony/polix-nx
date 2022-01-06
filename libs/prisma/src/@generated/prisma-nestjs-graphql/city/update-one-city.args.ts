import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityUpdateInput } from './city-update.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@ArgsType()
export class UpdateOneCityArgs {

    @Field(() => CityUpdateInput, {nullable:false})
    data!: CityUpdateInput;

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;
}
