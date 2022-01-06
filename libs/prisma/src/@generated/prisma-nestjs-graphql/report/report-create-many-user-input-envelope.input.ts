import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyUserInput } from './report-create-many-user.input';

@InputType()
export class ReportCreateManyUserInputEnvelope {

    @Field(() => [ReportCreateManyUserInput], {nullable:false})
    data!: Array<ReportCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
