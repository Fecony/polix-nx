import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateManyRegionInput } from './city-create-many-region.input';

@InputType()
export class CityCreateManyRegionInputEnvelope {

    @Field(() => [CityCreateManyRegionInput], {nullable:false})
    data!: Array<CityCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
