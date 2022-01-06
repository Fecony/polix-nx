import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionUpdateManyMutationInput } from './region-update-many-mutation.input';
import { RegionWhereInput } from './region-where.input';

@ArgsType()
export class UpdateManyRegionArgs {

    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    data!: RegionUpdateManyMutationInput;

    @Field(() => RegionWhereInput, {nullable:true})
    where?: RegionWhereInput;
}
