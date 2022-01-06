import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityCreateInput } from './city-create.input';

@ArgsType()
export class CreateOneCityArgs {

    @Field(() => CityCreateInput, {nullable:false})
    data!: CityCreateInput;
}
