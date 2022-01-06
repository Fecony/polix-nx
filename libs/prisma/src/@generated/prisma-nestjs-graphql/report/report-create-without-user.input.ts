import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedOneWithoutReportsInput } from '../city/city-create-nested-one-without-reports.input';
import { TagCreateNestedManyWithoutReportsInput } from '../tag/tag-create-nested-many-without-reports.input';
import { ReportMediaCreateNestedManyWithoutReportInput } from '../report-media/report-media-create-nested-many-without-report.input';

@InputType()
export class ReportCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: CityCreateNestedOneWithoutReportsInput;

    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutReportsInput;

    @Field(() => ReportMediaCreateNestedManyWithoutReportInput, {nullable:true})
    media?: ReportMediaCreateNestedManyWithoutReportInput;
}
