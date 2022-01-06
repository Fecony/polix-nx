import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionCreateManyInput } from './region-create-many.input';

@ArgsType()
export class CreateManyRegionArgs {

    @Field(() => [RegionCreateManyInput], {nullable:false})
    data!: Array<RegionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
