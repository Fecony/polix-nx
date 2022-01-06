import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutReportsInput } from './tag-create-without-reports.input';
import { TagCreateOrConnectWithoutReportsInput } from './tag-create-or-connect-without-reports.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateNestedManyWithoutReportsInput {

    @Field(() => [TagCreateWithoutReportsInput], {nullable:true})
    create?: Array<TagCreateWithoutReportsInput>;

    @Field(() => [TagCreateOrConnectWithoutReportsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutReportsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;
}
