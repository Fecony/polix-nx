import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutMediaInput } from './report-create-without-media.input';
import { ReportCreateOrConnectWithoutMediaInput } from './report-create-or-connect-without-media.input';
import { ReportUpsertWithoutMediaInput } from './report-upsert-without-media.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutMediaInput } from './report-update-without-media.input';

@InputType()
export class ReportUpdateOneRequiredWithoutMediaInput {

    @Field(() => ReportCreateWithoutMediaInput, {nullable:true})
    create?: ReportCreateWithoutMediaInput;

    @Field(() => ReportCreateOrConnectWithoutMediaInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutMediaInput;

    @Field(() => ReportUpsertWithoutMediaInput, {nullable:true})
    upsert?: ReportUpsertWithoutMediaInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutMediaInput, {nullable:true})
    update?: ReportUpdateWithoutMediaInput;
}
