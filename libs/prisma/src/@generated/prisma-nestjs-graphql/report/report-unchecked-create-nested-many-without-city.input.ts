import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutCityInput } from './report-create-without-city.input';
import { ReportCreateOrConnectWithoutCityInput } from './report-create-or-connect-without-city.input';
import { ReportCreateManyCityInputEnvelope } from './report-create-many-city-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportUncheckedCreateNestedManyWithoutCityInput {

    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;

    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;

    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyCityInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}
