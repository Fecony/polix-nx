import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaUpdateWithoutReportMediaInput } from './media-update-without-report-media.input';
import { MediaCreateWithoutReportMediaInput } from './media-create-without-report-media.input';

@InputType()
export class MediaUpsertWithoutReportMediaInput {

    @Field(() => MediaUpdateWithoutReportMediaInput, {nullable:false})
    update!: MediaUpdateWithoutReportMediaInput;

    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:false})
    create!: MediaCreateWithoutReportMediaInput;
}
