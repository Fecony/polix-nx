import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutReportsInput } from '../user/user-update-one-without-reports.input';
import { CityUpdateOneWithoutReportsInput } from '../city/city-update-one-without-reports.input';
import { ReportMediaUpdateManyWithoutReportInput } from '../report-media/report-media-update-many-without-report.input';

@InputType()
export class ReportUpdateWithoutTagsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutReportsInput, {nullable:true})
    user?: UserUpdateOneWithoutReportsInput;

    @Field(() => CityUpdateOneWithoutReportsInput, {nullable:true})
    city?: CityUpdateOneWithoutReportsInput;

    @Field(() => ReportMediaUpdateManyWithoutReportInput, {nullable:true})
    media?: ReportMediaUpdateManyWithoutReportInput;
}
