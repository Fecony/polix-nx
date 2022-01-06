import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutCityInput } from './report-update-without-city.input';
import { ReportCreateWithoutCityInput } from './report-create-without-city.input';

@InputType()
export class ReportUpsertWithWhereUniqueWithoutCityInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutCityInput, {nullable:false})
    update!: ReportUpdateWithoutCityInput;

    @Field(() => ReportCreateWithoutCityInput, {nullable:false})
    create!: ReportCreateWithoutCityInput;
}
