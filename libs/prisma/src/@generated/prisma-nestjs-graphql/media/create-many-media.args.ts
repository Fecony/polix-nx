import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaCreateManyInput } from './media-create-many.input';

@ArgsType()
export class CreateManyMediaArgs {

    @Field(() => [MediaCreateManyInput], {nullable:false})
    data!: Array<MediaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
