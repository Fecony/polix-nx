import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Country } from '../country/country.model';
import { Int } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { RegionCount } from './region-count.output';

@ObjectType()
export class Region {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Country, {nullable:false})
    country?: Country;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [City], {nullable:true})
    city?: Array<City>;

    @Field(() => RegionCount, {nullable:false})
    _count?: RegionCount;
}
