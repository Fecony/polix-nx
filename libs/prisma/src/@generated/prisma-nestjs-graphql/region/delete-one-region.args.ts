import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@ArgsType()
export class DeleteOneRegionArgs {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: RegionWhereUniqueInput;
}
