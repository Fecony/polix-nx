import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCreateManyInput } from './report-create-many.input';

@ArgsType()
export class CreateManyReportArgs {

    @Field(() => [ReportCreateManyInput], {nullable:false})
    data!: Array<ReportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
