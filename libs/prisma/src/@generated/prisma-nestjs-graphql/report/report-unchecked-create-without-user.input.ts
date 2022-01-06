import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportMediaUncheckedCreateNestedManyWithoutReportInput } from '../report-media/report-media-unchecked-create-nested-many-without-report.input';

@InputType()
export class ReportUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    cityId?: number;

    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    media?: ReportMediaUncheckedCreateNestedManyWithoutReportInput;
}
