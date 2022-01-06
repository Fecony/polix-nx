import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutCityInput } from './report-update-without-city.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutCityInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutCityInput, {nullable:false})
    data!: ReportUpdateWithoutCityInput;
}
