import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutUserInput } from './report-create-without-user.input';
import { ReportCreateOrConnectWithoutUserInput } from './report-create-or-connect-without-user.input';
import { ReportUpsertWithWhereUniqueWithoutUserInput } from './report-upsert-with-where-unique-without-user.input';
import { ReportCreateManyUserInputEnvelope } from './report-create-many-user-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutUserInput } from './report-update-with-where-unique-without-user.input';
import { ReportUpdateManyWithWhereWithoutUserInput } from './report-update-many-with-where-without-user.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUpdateManyWithoutUserInput {

    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;

    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyUserInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}
