import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityCreateWithoutReportsInput } from './city-create-without-reports.input';

@InputType()
export class CityCreateOrConnectWithoutReportsInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutReportsInput, {nullable:false})
    create!: CityCreateWithoutReportsInput;
}
