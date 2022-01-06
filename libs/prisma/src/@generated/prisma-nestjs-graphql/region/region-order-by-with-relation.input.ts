import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { CityOrderByRelationAggregateInput } from '../city/city-order-by-relation-aggregate.input';

@InputType()
export class RegionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CityOrderByRelationAggregateInput, {nullable:true})
    city?: CityOrderByRelationAggregateInput;
}
