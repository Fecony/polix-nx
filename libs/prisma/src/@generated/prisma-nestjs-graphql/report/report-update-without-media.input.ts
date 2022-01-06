import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutReportsInput } from '../user/user-update-one-without-reports.input';
import { CityUpdateOneWithoutReportsInput } from '../city/city-update-one-without-reports.input';
import { TagUpdateManyWithoutReportsInput } from '../tag/tag-update-many-without-reports.input';

@InputType()
export class ReportUpdateWithoutMediaInput {

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

    @Field(() => TagUpdateManyWithoutReportsInput, {nullable:true})
    tags?: TagUpdateManyWithoutReportsInput;
}
