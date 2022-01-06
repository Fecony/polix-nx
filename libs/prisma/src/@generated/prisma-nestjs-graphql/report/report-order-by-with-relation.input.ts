import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { ReportMediaOrderByRelationAggregateInput } from '../report-media/report-media-order-by-relation-aggregate.input';

@InputType()
export class ReportOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => ReportMediaOrderByRelationAggregateInput, {nullable:true})
    media?: ReportMediaOrderByRelationAggregateInput;
}
