import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutReportsInput } from './city-create-without-reports.input';
import { CityCreateOrConnectWithoutReportsInput } from './city-create-or-connect-without-reports.input';
import { CityUpsertWithoutReportsInput } from './city-upsert-without-reports.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithoutReportsInput } from './city-update-without-reports.input';

@InputType()
export class CityUpdateOneWithoutReportsInput {

    @Field(() => CityCreateWithoutReportsInput, {nullable:true})
    create?: CityCreateWithoutReportsInput;

    @Field(() => CityCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: CityCreateOrConnectWithoutReportsInput;

    @Field(() => CityUpsertWithoutReportsInput, {nullable:true})
    upsert?: CityUpsertWithoutReportsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: CityWhereUniqueInput;

    @Field(() => CityUpdateWithoutReportsInput, {nullable:true})
    update?: CityUpdateWithoutReportsInput;
}
