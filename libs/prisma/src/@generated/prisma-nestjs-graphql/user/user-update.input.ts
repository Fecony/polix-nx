import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SocialAccountUpdateManyWithoutUserInput } from '../social-account/social-account-update-many-without-user.input';
import { ReportUpdateManyWithoutUserInput } from '../report/report-update-many-without-user.input';

@InputType()
export class UserUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SocialAccountUpdateManyWithoutUserInput, {nullable:true})
    SocialAccount?: SocialAccountUpdateManyWithoutUserInput;

    @Field(() => ReportUpdateManyWithoutUserInput, {nullable:true})
    reports?: ReportUpdateManyWithoutUserInput;
}
