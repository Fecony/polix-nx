import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateNestedOneWithoutMediaInput } from '../report/report-create-nested-one-without-media.input';

@InputType()
export class ReportMediaCreateWithoutMediaInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportCreateNestedOneWithoutMediaInput, {nullable:false})
    report!: ReportCreateNestedOneWithoutMediaInput;
}
