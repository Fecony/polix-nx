import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityCreateInput } from './city-create.input';
import { CityUpdateInput } from './city-update.input';

@ArgsType()
export class UpsertOneCityArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateInput, {nullable:false})
    create!: CityCreateInput;

    @Field(() => CityUpdateInput, {nullable:false})
    update!: CityUpdateInput;
}
