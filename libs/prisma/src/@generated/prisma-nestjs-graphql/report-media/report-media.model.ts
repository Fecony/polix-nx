import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Report } from '../report/report.model';
import { Int } from '@nestjs/graphql';
import { Media } from '../media/media.model';

@ObjectType()
export class ReportMedia {

    @Field(() => ID, {nullable:false})
    id!: number;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    report?: Report;

    @Field(() => Int, {nullable:false})
    reportId!: number;

    @HideField()
    media?: Media;

    @Field(() => Int, {nullable:false})
    mediaId!: number;
}
