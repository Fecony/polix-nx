import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReportUpdateOneRequiredWithoutMediaInput } from '../report/report-update-one-required-without-media.input';
import { MediaUpdateOneRequiredWithoutReportMediaInput } from '../media/media-update-one-required-without-report-media.input';

@InputType()
export class ReportMediaUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReportUpdateOneRequiredWithoutMediaInput, {nullable:true})
    report?: ReportUpdateOneRequiredWithoutMediaInput;

    @Field(() => MediaUpdateOneRequiredWithoutReportMediaInput, {nullable:true})
    media?: MediaUpdateOneRequiredWithoutReportMediaInput;
}
