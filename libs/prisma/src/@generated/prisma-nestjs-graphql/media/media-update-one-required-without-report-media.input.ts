import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutReportMediaInput } from './media-create-without-report-media.input';
import { MediaCreateOrConnectWithoutReportMediaInput } from './media-create-or-connect-without-report-media.input';
import { MediaUpsertWithoutReportMediaInput } from './media-upsert-without-report-media.input';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaUpdateWithoutReportMediaInput } from './media-update-without-report-media.input';

@InputType()
export class MediaUpdateOneRequiredWithoutReportMediaInput {

    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:true})
    create?: MediaCreateWithoutReportMediaInput;

    @Field(() => MediaCreateOrConnectWithoutReportMediaInput, {nullable:true})
    connectOrCreate?: MediaCreateOrConnectWithoutReportMediaInput;

    @Field(() => MediaUpsertWithoutReportMediaInput, {nullable:true})
    upsert?: MediaUpsertWithoutReportMediaInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    connect?: MediaWhereUniqueInput;

    @Field(() => MediaUpdateWithoutReportMediaInput, {nullable:true})
    update?: MediaUpdateWithoutReportMediaInput;
}
