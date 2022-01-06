import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionCreateInput } from './region-create.input';

@ArgsType()
export class CreateOneRegionArgs {

    @Field(() => RegionCreateInput, {nullable:false})
    data!: RegionCreateInput;
}
