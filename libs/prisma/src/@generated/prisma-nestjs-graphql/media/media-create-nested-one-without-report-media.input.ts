import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutReportMediaInput } from './media-create-without-report-media.input';
import { MediaCreateOrConnectWithoutReportMediaInput } from './media-create-or-connect-without-report-media.input';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@InputType()
export class MediaCreateNestedOneWithoutReportMediaInput {

    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:true})
    create?: MediaCreateWithoutReportMediaInput;

    @Field(() => MediaCreateOrConnectWithoutReportMediaInput, {nullable:true})
    connectOrCreate?: MediaCreateOrConnectWithoutReportMediaInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    connect?: MediaWhereUniqueInput;
}
