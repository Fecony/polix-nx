import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionUpdateInput } from './region-update.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@ArgsType()
export class UpdateOneRegionArgs {

    @Field(() => RegionUpdateInput, {nullable:false})
    data!: RegionUpdateInput;

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;
}
