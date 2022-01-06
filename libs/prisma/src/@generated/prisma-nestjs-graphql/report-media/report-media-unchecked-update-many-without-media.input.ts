import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateWithoutMediaInput } from './report-media-create-without-media.input';
import { ReportMediaCreateOrConnectWithoutMediaInput } from './report-media-create-or-connect-without-media.input';
import { ReportMediaUpsertWithWhereUniqueWithoutMediaInput } from './report-media-upsert-with-where-unique-without-media.input';
import { ReportMediaCreateManyMediaInputEnvelope } from './report-media-create-many-media-input-envelope.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithWhereUniqueWithoutMediaInput } from './report-media-update-with-where-unique-without-media.input';
import { ReportMediaUpdateManyWithWhereWithoutMediaInput } from './report-media-update-many-with-where-without-media.input';
import { ReportMediaScalarWhereInput } from './report-media-scalar-where.input';

@InputType()
export class ReportMediaUncheckedUpdateManyWithoutMediaInput {

    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;

    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;

    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutMediaInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutMediaInput>;

    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: ReportMediaCreateManyMediaInputEnvelope;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;

    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutMediaInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutMediaInput>;

    @Field(() => [ReportMediaUpdateManyWithWhereWithoutMediaInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutMediaInput>;

    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}
