import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaWhereInput } from './report-media-where.input';
import { ReportMediaOrderByWithRelationInput } from './report-media-order-by-with-relation.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportMediaCountAggregateInput } from './report-media-count-aggregate.input';
import { ReportMediaAvgAggregateInput } from './report-media-avg-aggregate.input';
import { ReportMediaSumAggregateInput } from './report-media-sum-aggregate.input';
import { ReportMediaMinAggregateInput } from './report-media-min-aggregate.input';
import { ReportMediaMaxAggregateInput } from './report-media-max-aggregate.input';

@ArgsType()
export class ReportMediaAggregateArgs {

    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: ReportMediaWhereInput;

    @Field(() => [ReportMediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportMediaOrderByWithRelationInput>;

    @Field(() => ReportMediaWhereUniqueInput, {nullable:true})
    cursor?: ReportMediaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReportMediaCountAggregateInput, {nullable:true})
    _count?: ReportMediaCountAggregateInput;

    @Field(() => ReportMediaAvgAggregateInput, {nullable:true})
    _avg?: ReportMediaAvgAggregateInput;

    @Field(() => ReportMediaSumAggregateInput, {nullable:true})
    _sum?: ReportMediaSumAggregateInput;

    @Field(() => ReportMediaMinAggregateInput, {nullable:true})
    _min?: ReportMediaMinAggregateInput;

    @Field(() => ReportMediaMaxAggregateInput, {nullable:true})
    _max?: ReportMediaMaxAggregateInput;
}
