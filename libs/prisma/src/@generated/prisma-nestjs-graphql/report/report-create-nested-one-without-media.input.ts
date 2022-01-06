import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutMediaInput } from './report-create-without-media.input';
import { ReportCreateOrConnectWithoutMediaInput } from './report-create-or-connect-without-media.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedOneWithoutMediaInput {

    @Field(() => ReportCreateWithoutMediaInput, {nullable:true})
    create?: ReportCreateWithoutMediaInput;

    @Field(() => ReportCreateOrConnectWithoutMediaInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutMediaInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;
}
