import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportMediaCountAggregate } from './report-media-count-aggregate.output';
import { ReportMediaAvgAggregate } from './report-media-avg-aggregate.output';
import { ReportMediaSumAggregate } from './report-media-sum-aggregate.output';
import { ReportMediaMinAggregate } from './report-media-min-aggregate.output';
import { ReportMediaMaxAggregate } from './report-media-max-aggregate.output';

@ObjectType()
export class ReportMediaGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    reportId!: number;

    @Field(() => Int, {nullable:false})
    mediaId!: number;

    @Field(() => ReportMediaCountAggregate, {nullable:true})
    _count?: ReportMediaCountAggregate;

    @Field(() => ReportMediaAvgAggregate, {nullable:true})
    _avg?: ReportMediaAvgAggregate;

    @Field(() => ReportMediaSumAggregate, {nullable:true})
    _sum?: ReportMediaSumAggregate;

    @Field(() => ReportMediaMinAggregate, {nullable:true})
    _min?: ReportMediaMinAggregate;

    @Field(() => ReportMediaMaxAggregate, {nullable:true})
    _max?: ReportMediaMaxAggregate;
}
