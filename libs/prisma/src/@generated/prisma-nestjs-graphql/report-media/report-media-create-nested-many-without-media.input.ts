import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateWithoutMediaInput } from './report-media-create-without-media.input';
import { ReportMediaCreateOrConnectWithoutMediaInput } from './report-media-create-or-connect-without-media.input';
import { ReportMediaCreateManyMediaInputEnvelope } from './report-media-create-many-media-input-envelope.input';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';

@InputType()
export class ReportMediaCreateNestedManyWithoutMediaInput {

    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;

    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;

    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: ReportMediaCreateManyMediaInputEnvelope;

    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}
