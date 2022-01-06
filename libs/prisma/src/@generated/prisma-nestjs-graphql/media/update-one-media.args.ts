import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaUpdateInput } from './media-update.input';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@ArgsType()
export class UpdateOneMediaArgs {

    @Field(() => MediaUpdateInput, {nullable:false})
    data!: MediaUpdateInput;

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: MediaWhereUniqueInput;
}
