import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityUpdateManyMutationInput } from './city-update-many-mutation.input';
import { CityWhereInput } from './city-where.input';

@ArgsType()
export class UpdateManyCityArgs {

    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    data!: CityUpdateManyMutationInput;

    @Field(() => CityWhereInput, {nullable:true})
    where?: CityWhereInput;
}
