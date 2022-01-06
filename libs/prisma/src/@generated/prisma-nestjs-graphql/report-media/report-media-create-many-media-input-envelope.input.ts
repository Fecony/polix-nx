import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportMediaCreateManyMediaInput } from './report-media-create-many-media.input';

@InputType()
export class ReportMediaCreateManyMediaInputEnvelope {

    @Field(() => [ReportMediaCreateManyMediaInput], {nullable:false})
    data!: Array<ReportMediaCreateManyMediaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
