import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { MediaOrderByWithRelationInput } from './media-order-by-with-relation.input';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaCountAggregateInput } from './media-count-aggregate.input';
import { MediaAvgAggregateInput } from './media-avg-aggregate.input';
import { MediaSumAggregateInput } from './media-sum-aggregate.input';
import { MediaMinAggregateInput } from './media-min-aggregate.input';
import { MediaMaxAggregateInput } from './media-max-aggregate.input';

@ArgsType()
export class MediaAggregateArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    where?: MediaWhereInput;

    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: MediaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MediaCountAggregateInput, {nullable:true})
    _count?: MediaCountAggregateInput;

    @Field(() => MediaAvgAggregateInput, {nullable:true})
    _avg?: MediaAvgAggregateInput;

    @Field(() => MediaSumAggregateInput, {nullable:true})
    _sum?: MediaSumAggregateInput;

    @Field(() => MediaMinAggregateInput, {nullable:true})
    _min?: MediaMinAggregateInput;

    @Field(() => MediaMaxAggregateInput, {nullable:true})
    _max?: MediaMaxAggregateInput;
}
