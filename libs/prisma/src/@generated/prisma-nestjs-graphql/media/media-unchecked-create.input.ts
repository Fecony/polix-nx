import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportMediaUncheckedCreateNestedManyWithoutMediaInput } from '../report-media/report-media-unchecked-create-nested-many-without-media.input';

@InputType()
export class MediaUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutMediaInput, {nullable:true})
    reportMedia?: ReportMediaUncheckedCreateNestedManyWithoutMediaInput;
}
