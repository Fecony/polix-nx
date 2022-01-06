import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutReportsInput } from './city-create-without-reports.input';
import { CityCreateOrConnectWithoutReportsInput } from './city-create-or-connect-without-reports.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutReportsInput {

    @Field(() => CityCreateWithoutReportsInput, {nullable:true})
    create?: CityCreateWithoutReportsInput;

    @Field(() => CityCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: CityCreateOrConnectWithoutReportsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: CityWhereUniqueInput;
}
