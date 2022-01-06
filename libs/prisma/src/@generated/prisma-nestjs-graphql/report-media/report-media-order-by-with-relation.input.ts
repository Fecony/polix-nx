import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReportOrderByWithRelationInput } from '../report/report-order-by-with-relation.input';
import { MediaOrderByWithRelationInput } from '../media/media-order-by-with-relation.input';

@InputType()
export class ReportMediaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReportOrderByWithRelationInput, {nullable:true})
    report?: ReportOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => MediaOrderByWithRelationInput, {nullable:true})
    media?: MediaOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}
