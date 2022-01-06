import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateManyCountryInput } from './region-create-many-country.input';

@InputType()
export class RegionCreateManyCountryInputEnvelope {

    @Field(() => [RegionCreateManyCountryInput], {nullable:false})
    data!: Array<RegionCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
