import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutReportsInput } from './tag-create-without-reports.input';
import { TagCreateOrConnectWithoutReportsInput } from './tag-create-or-connect-without-reports.input';
import { TagUpsertWithWhereUniqueWithoutReportsInput } from './tag-upsert-with-where-unique-without-reports.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutReportsInput } from './tag-update-with-where-unique-without-reports.input';
import { TagUpdateManyWithWhereWithoutReportsInput } from './tag-update-many-with-where-without-reports.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutReportsInput {

    @Field(() => [TagCreateWithoutReportsInput], {nullable:true})
    create?: Array<TagCreateWithoutReportsInput>;

    @Field(() => [TagCreateOrConnectWithoutReportsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutReportsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutReportsInput], {nullable:true})
    upsert?: Array<TagUpsertWithWhereUniqueWithoutReportsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutReportsInput], {nullable:true})
    update?: Array<TagUpdateWithWhereUniqueWithoutReportsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutReportsInput], {nullable:true})
    updateMany?: Array<TagUpdateManyWithWhereWithoutReportsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    deleteMany?: Array<TagScalarWhereInput>;
}
