import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { Tag } from '../tag/tag.model';
import { ReportMedia } from '../report-media/report-media.model';
import { ReportCount } from './report-count.output';

@ObjectType()
export class Report {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => City, {nullable:true})
    city?: City | null;

    @Field(() => Int, {nullable:true})
    cityId!: number | null;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [ReportMedia], {nullable:true})
    media?: Array<ReportMedia>;

    @Field(() => ReportCount, {nullable:false})
    _count?: ReportCount;
}
