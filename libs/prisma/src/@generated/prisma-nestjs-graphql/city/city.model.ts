import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Region } from '../region/region.model';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Report } from '../report/report.model';
import { CityCount } from './city-count.output';

@ObjectType()
export class City {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    region?: Region;

    @Field(() => Int, {nullable:false})
    regionId!: number;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    reports?: Array<Report>;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
