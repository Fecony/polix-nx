import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutTagsInput } from './report-create-without-tags.input';
import { ReportCreateOrConnectWithoutTagsInput } from './report-create-or-connect-without-tags.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedManyWithoutTagsInput {

    @Field(() => [ReportCreateWithoutTagsInput], {nullable:true})
    create?: Array<ReportCreateWithoutTagsInput>;

    @Field(() => [ReportCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTagsInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}
