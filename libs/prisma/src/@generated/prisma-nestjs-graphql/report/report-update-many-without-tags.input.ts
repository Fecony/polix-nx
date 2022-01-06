import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutTagsInput } from './report-create-without-tags.input';
import { ReportCreateOrConnectWithoutTagsInput } from './report-create-or-connect-without-tags.input';
import { ReportUpsertWithWhereUniqueWithoutTagsInput } from './report-upsert-with-where-unique-without-tags.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutTagsInput } from './report-update-with-where-unique-without-tags.input';
import { ReportUpdateManyWithWhereWithoutTagsInput } from './report-update-many-with-where-without-tags.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUpdateManyWithoutTagsInput {

    @Field(() => [ReportCreateWithoutTagsInput], {nullable:true})
    create?: Array<ReportCreateWithoutTagsInput>;

    @Field(() => [ReportCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTagsInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}
