import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CountryUpdateOneRequiredWithoutRegionInput } from '../country/country-update-one-required-without-region.input';
import { CityUpdateManyWithoutRegionInput } from '../city/city-update-many-without-region.input';

@InputType()
export class RegionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CountryUpdateOneRequiredWithoutRegionInput, {nullable:true})
    country?: CountryUpdateOneRequiredWithoutRegionInput;

    @Field(() => CityUpdateManyWithoutRegionInput, {nullable:true})
    city?: CityUpdateManyWithoutRegionInput;
}