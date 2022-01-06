import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Report } from '../report/report.model';
import { Int } from '@nestjs/graphql';
import { Media } from '../media/media.model';

@ObjectType()
export class ReportMedia {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Report, {nullable:false})
    report?: Report;

    @Field(() => Int, {nullable:false})
    reportId!: number;

    @Field(() => Media, {nullable:false})
    media?: Media;

    @Field(() => Int, {nullable:false})
    mediaId!: number;
}
