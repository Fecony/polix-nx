import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegionOrderByWithRelationInput } from '../region/region-order-by-with-relation.input';
import { ReportOrderByRelationAggregateInput } from '../report/report-order-by-relation-aggregate.input';

@InputType()
export class CityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => RegionOrderByWithRelationInput, {nullable:true})
    region?: RegionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ReportOrderByRelationAggregateInput;
}
