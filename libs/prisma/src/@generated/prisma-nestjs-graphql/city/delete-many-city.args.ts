import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';

@ArgsType()
export class DeleteManyCityArgs {

    @Field(() => CityWhereInput, {nullable:true})
    where?: CityWhereInput;
}
