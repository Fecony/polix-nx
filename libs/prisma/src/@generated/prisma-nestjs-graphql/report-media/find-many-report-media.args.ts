import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaWhereInput } from './report-media-where.input';
import { ReportMediaOrderByWithRelationInput } from './report-media-order-by-with-relation.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportMediaScalarFieldEnum } from './report-media-scalar-field.enum';

@ArgsType()
export class FindManyReportMediaArgs {

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

    @Field(() => [ReportMediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportMediaScalarFieldEnum>;
}
