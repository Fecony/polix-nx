import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateNestedOneWithoutReportMediaInput } from '../media/media-create-nested-one-without-report-media.input';

@InputType()
export class ReportMediaCreateWithoutReportInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MediaCreateNestedOneWithoutReportMediaInput, {nullable:false})
    media!: MediaCreateNestedOneWithoutReportMediaInput;
}
