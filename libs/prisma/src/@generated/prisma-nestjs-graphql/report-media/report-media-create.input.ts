import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateNestedOneWithoutMediaInput } from '../report/report-create-nested-one-without-media.input';
import { MediaCreateNestedOneWithoutReportMediaInput } from '../media/media-create-nested-one-without-report-media.input';

@InputType()
export class ReportMediaCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportCreateNestedOneWithoutMediaInput, {nullable:false})
    report!: ReportCreateNestedOneWithoutMediaInput;

    @Field(() => MediaCreateNestedOneWithoutReportMediaInput, {nullable:false})
    media!: MediaCreateNestedOneWithoutReportMediaInput;
}
