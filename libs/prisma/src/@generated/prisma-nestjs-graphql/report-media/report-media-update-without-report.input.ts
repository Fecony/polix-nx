import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MediaUpdateOneRequiredWithoutReportMediaInput } from '../media/media-update-one-required-without-report-media.input';

@InputType()
export class ReportMediaUpdateWithoutReportInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MediaUpdateOneRequiredWithoutReportMediaInput, {nullable:true})
    media?: MediaUpdateOneRequiredWithoutReportMediaInput;
}
