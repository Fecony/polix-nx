import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
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

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    region?: Array<Region>;

    @Field(() => CountryCount, {nullable:false})
    _count?: CountryCount;
}
