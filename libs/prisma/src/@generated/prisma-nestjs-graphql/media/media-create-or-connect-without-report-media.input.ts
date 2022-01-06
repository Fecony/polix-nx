import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaCreateWithoutReportMediaInput } from './media-create-without-report-media.input';

@InputType()
export class MediaCreateOrConnectWithoutReportMediaInput {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: MediaWhereUniqueInput;

    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:false})
    create!: MediaCreateWithoutReportMediaInput;
}
