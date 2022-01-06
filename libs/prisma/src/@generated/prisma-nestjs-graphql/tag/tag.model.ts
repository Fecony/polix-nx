import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Report } from '../report/report.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    reports?: Array<Report>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
