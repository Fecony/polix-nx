import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportMediaCreateManyInput } from './report-media-create-many.input';

@ArgsType()
export class CreateManyReportMediaArgs {

    @Field(() => [ReportMediaCreateManyInput], {nullable:false})
    data!: Array<ReportMediaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
