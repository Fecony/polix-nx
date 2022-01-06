import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';

@ArgsType()
export class DeleteManyMediaArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    where?: MediaWhereInput;
}
