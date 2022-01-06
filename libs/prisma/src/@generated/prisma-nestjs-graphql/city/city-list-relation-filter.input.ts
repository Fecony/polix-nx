import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';

@InputType()
export class CityListRelationFilter {

    @Field(() => CityWhereInput, {nullable:true})
    every?: CityWhereInput;

    @Field(() => CityWhereInput, {nullable:true})
    some?: CityWhereInput;

    @Field(() => CityWhereInput, {nullable:true})
    none?: CityWhereInput;
}
