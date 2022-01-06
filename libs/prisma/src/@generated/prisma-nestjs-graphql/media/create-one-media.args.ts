import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaCreateInput } from './media-create.input';

@ArgsType()
export class CreateOneMediaArgs {

    @Field(() => MediaCreateInput, {nullable:false})
    data!: MediaCreateInput;
}
