import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereInput } from './report-media-where.input';

@InputType()
export class ReportMediaListRelationFilter {

    @Field(() => ReportMediaWhereInput, {nullable:true})
    every?: ReportMediaWhereInput;

    @Field(() => ReportMediaWhereInput, {nullable:true})
    some?: ReportMediaWhereInput;

    @Field(() => ReportMediaWhereInput, {nullable:true})
    none?: ReportMediaWhereInput;
}
