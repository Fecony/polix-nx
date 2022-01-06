import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportUpdateWithoutMediaInput } from './report-update-without-media.input';
import { ReportCreateWithoutMediaInput } from './report-create-without-media.input';

@InputType()
export class ReportUpsertWithoutMediaInput {

    @Field(() => ReportUpdateWithoutMediaInput, {nullable:false})
    update!: ReportUpdateWithoutMediaInput;

    @Field(() => ReportCreateWithoutMediaInput, {nullable:false})
    create!: ReportCreateWithoutMediaInput;
}
