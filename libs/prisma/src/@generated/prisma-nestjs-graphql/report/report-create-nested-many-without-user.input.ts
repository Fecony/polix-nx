import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutUserInput } from './report-create-without-user.input';
import { ReportCreateOrConnectWithoutUserInput } from './report-create-or-connect-without-user.input';
import { ReportCreateManyUserInputEnvelope } from './report-create-many-user-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedManyWithoutUserInput {

    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;

    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;

    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyUserInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}
