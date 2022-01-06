import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { CityOrderByWithRelationInput } from './city-order-by-with-relation.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CityScalarFieldEnum } from './city-scalar-field.enum';

@ArgsType()
export class FindManyCityArgs {

    @Field(() => CityWhereInput, {nullable:true})
    where?: CityWhereInput;

    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: CityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
