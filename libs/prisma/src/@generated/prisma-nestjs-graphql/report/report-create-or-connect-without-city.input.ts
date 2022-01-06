import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutCityInput } from './report-create-without-city.input';

@InputType()
export class ReportCreateOrConnectWithoutCityInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutCityInput, {nullable:false})
    create!: ReportCreateWithoutCityInput;
}
