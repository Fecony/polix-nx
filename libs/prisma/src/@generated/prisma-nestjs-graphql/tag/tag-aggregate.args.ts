import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagAvgAggregateInput } from './tag-avg-aggregate.input';
import { TagSumAggregateInput } from './tag-sum-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';

@ArgsType()
export class TagAggregateArgs {

    @Field(() => TagWhereInput, {nullable:true})
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;

    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: TagCountAggregateInput;

    @Field(() => TagAvgAggregateInput, {nullable:true})
    _avg?: TagAvgAggregateInput;

    @Field(() => TagSumAggregateInput, {nullable:true})
    _sum?: TagSumAggregateInput;

    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: TagMaxAggregateInput;
}
