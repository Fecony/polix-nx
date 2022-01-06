import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Region } from '../region/region.model';
import { Int } from '@nestjs/graphql';
import { Report } from '../report/report.model';
import { CityCount } from './city-count.output';

@ObjectType()
export class City {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Region, {nullable:false})
    region?: Region;

    @Field(() => Int, {nullable:false})
    regionId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Report], {nullable:true})
    reports?: Array<Report>;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
