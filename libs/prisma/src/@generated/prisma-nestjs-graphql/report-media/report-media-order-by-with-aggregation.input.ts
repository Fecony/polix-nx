import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReportMediaCountOrderByAggregateInput } from './report-media-count-order-by-aggregate.input';
import { ReportMediaAvgOrderByAggregateInput } from './report-media-avg-order-by-aggregate.input';
import { ReportMediaMaxOrderByAggregateInput } from './report-media-max-order-by-aggregate.input';
import { ReportMediaMinOrderByAggregateInput } from './report-media-min-order-by-aggregate.input';
import { ReportMediaSumOrderByAggregateInput } from './report-media-sum-order-by-aggregate.input';

@InputType()
export class ReportMediaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;

    @Field(() => ReportMediaCountOrderByAggregateInput, {nullable:true})
    _count?: ReportMediaCountOrderByAggregateInput;

    @Field(() => ReportMediaAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReportMediaAvgOrderByAggregateInput;

    @Field(() => ReportMediaMaxOrderByAggregateInput, {nullable:true})
    _max?: ReportMediaMaxOrderByAggregateInput;

    @Field(() => ReportMediaMinOrderByAggregateInput, {nullable:true})
    _min?: ReportMediaMinOrderByAggregateInput;

    @Field(() => ReportMediaSumOrderByAggregateInput, {nullable:true})
    _sum?: ReportMediaSumOrderByAggregateInput;
}
