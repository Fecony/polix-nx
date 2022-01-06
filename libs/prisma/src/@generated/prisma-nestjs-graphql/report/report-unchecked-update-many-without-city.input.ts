import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutCityInput } from './report-create-without-city.input';
import { ReportCreateOrConnectWithoutCityInput } from './report-create-or-connect-without-city.input';
import { ReportUpsertWithWhereUniqueWithoutCityInput } from './report-upsert-with-where-unique-without-city.input';
import { ReportCreateManyCityInputEnvelope } from './report-create-many-city-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutCityInput } from './report-update-with-where-unique-without-city.input';
import { ReportUpdateManyWithWhereWithoutCityInput } from './report-update-many-with-where-without-city.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUncheckedUpdateManyWithoutCityInput {

    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;

    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyCityInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}
