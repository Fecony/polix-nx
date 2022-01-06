import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityScalarWhereInput } from './city-scalar-where.input';
import { CityUpdateManyMutationInput } from './city-update-many-mutation.input';

@InputType()
export class CityUpdateManyWithWhereWithoutRegionInput {

    @Field(() => CityScalarWhereInput, {nullable:false})
    where!: CityScalarWhereInput;

    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    data!: CityUpdateManyMutationInput;
}
