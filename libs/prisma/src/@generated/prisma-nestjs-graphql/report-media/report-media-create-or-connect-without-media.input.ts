import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaCreateWithoutMediaInput } from './report-media-create-without-media.input';

@InputType()
export class ReportMediaCreateOrConnectWithoutMediaInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaCreateWithoutMediaInput, {nullable:false})
    create!: ReportMediaCreateWithoutMediaInput;
}
