import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyCityInput } from './report-create-many-city.input';

@InputType()
export class ReportCreateManyCityInputEnvelope {

    @Field(() => [ReportCreateManyCityInput], {nullable:false})
    data!: Array<ReportCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
