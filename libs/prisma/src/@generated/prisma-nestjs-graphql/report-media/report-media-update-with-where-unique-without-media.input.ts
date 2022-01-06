import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaWhereUniqueInput } from './report-media-where-unique.input';
import { ReportMediaUpdateWithoutMediaInput } from './report-media-update-without-media.input';

@InputType()
export class ReportMediaUpdateWithWhereUniqueWithoutMediaInput {

    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: ReportMediaWhereUniqueInput;

    @Field(() => ReportMediaUpdateWithoutMediaInput, {nullable:false})
    data!: ReportMediaUpdateWithoutMediaInput;
}
