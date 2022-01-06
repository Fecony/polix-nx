import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReportUpdateOneRequiredWithoutMediaInput } from '../report/report-update-one-required-without-media.input';

@InputType()
export class ReportMediaUpdateWithoutMediaInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReportUpdateOneRequiredWithoutMediaInput, {nullable:true})
    report?: ReportUpdateOneRequiredWithoutMediaInput;
}
