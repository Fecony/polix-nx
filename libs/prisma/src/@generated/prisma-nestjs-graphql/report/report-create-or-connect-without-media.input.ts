import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutMediaInput } from './report-create-without-media.input';

@InputType()
export class ReportCreateOrConnectWithoutMediaInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutMediaInput, {nullable:false})
    create!: ReportCreateWithoutMediaInput;
}
