import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';

@ArgsType()
export class DeleteManyRegionArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    where?: RegionWhereInput;
}
