import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutReportsInput } from './city-update-without-reports.input';
import { CityCreateWithoutReportsInput } from './city-create-without-reports.input';

@InputType()
export class CityUpsertWithoutReportsInput {

    @Field(() => CityUpdateWithoutReportsInput, {nullable:false})
    update!: CityUpdateWithoutReportsInput;

    @Field(() => CityCreateWithoutReportsInput, {nullable:false})
    create!: CityCreateWithoutReportsInput;
}
