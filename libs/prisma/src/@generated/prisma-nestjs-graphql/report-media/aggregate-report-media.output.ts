import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReportMediaCountAggregate } from './report-media-count-aggregate.output';
import { ReportMediaAvgAggregate } from './report-media-avg-aggregate.output';
import { ReportMediaSumAggregate } from './report-media-sum-aggregate.output';
import { ReportMediaMinAggregate } from './report-media-min-aggregate.output';
import { ReportMediaMaxAggregate } from './report-media-max-aggregate.output';

@ObjectType()
export class AggregateReportMedia {

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
