import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Region } from '../region/region.model';
import { CountryCount } from './country-count.output';

@ObjectType()
export class Country {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Region], {nullable:true})
    region?: Array<Region>;

    @Field(() => CountryCount, {nullable:false})
    _count?: CountryCount;
}
