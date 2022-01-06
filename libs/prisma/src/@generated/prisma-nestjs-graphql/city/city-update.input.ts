import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RegionUpdateOneRequiredWithoutCityInput } from '../region/region-update-one-required-without-city.input';
import { ReportUpdateManyWithoutCityInput } from '../report/report-update-many-without-city.input';

@InputType()
export class CityUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RegionUpdateOneRequiredWithoutCityInput, {nullable:true})
    region?: RegionUpdateOneRequiredWithoutCityInput;

    @Field(() => ReportUpdateManyWithoutCityInput, {nullable:true})
    reports?: ReportUpdateManyWithoutCityInput;
}