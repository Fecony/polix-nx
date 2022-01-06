import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ReportMedia } from '../report-media/report-media.model';
import { MediaCount } from './media-count.output';

@ObjectType()
export class Media {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    reportMedia?: Array<ReportMedia>;

    @Field(() => MediaCount, {nullable:false})
    _count?: MediaCount;
}
