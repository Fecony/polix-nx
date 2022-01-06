import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityCreateManyInput } from './city-create-many.input';

@ArgsType()
export class CreateManyCityArgs {

    @Field(() => [CityCreateManyInput], {nullable:false})
    data!: Array<CityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
