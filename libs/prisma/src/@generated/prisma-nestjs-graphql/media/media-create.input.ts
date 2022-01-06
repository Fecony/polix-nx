import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateNestedManyWithoutMediaInput } from '../report-media/report-media-create-nested-many-without-media.input';

@InputType()
export class MediaCreateInput {

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportMediaCreateNestedManyWithoutMediaInput, {nullable:true})
    reportMedia?: ReportMediaCreateNestedManyWithoutMediaInput;
}
