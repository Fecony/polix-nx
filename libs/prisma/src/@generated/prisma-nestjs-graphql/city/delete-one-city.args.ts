import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';

@ArgsType()
export class DeleteOneCityArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;
}
