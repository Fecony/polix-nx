import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionScalarWhereInput } from './region-scalar-where.input';
import { RegionUpdateManyMutationInput } from './region-update-many-mutation.input';

@InputType()
export class RegionUpdateManyWithWhereWithoutCountryInput {

    @Field(() => RegionScalarWhereInput, {nullable:false})
    where!: RegionScalarWhereInput;

    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    data!: RegionUpdateManyMutationInput;
}
