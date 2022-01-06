import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithoutMediaInput } from './report-media-update-without-media.input';
import { ReportMediaCreateWithoutMediaInput } from './report-media-create-without-media.input';

@InputType()
export class ReportMediaUpsertWithWhereUniqueWithoutMediaInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaUpdateWithoutMediaInput, {nullable:false})
    update!: ReportMediaUpdateWithoutMediaInput;

    @Field(() => ReportMediaCreateWithoutMediaInput, {nullable:false})
    create!: ReportMediaCreateWithoutMediaInput;
}
