import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionCreateInput } from './region-create.input';
import { RegionUpdateInput } from './region-update.input';

@ArgsType()
export class UpsertOneRegionArgs {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateInput, {nullable:false})
    create!: RegionCreateInput;

    @Field(() => RegionUpdateInput, {nullable:false})
    update!: RegionUpdateInput;
}
