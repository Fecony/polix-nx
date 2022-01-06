import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaCreateInput } from './media-create.input';
import { MediaUpdateInput } from './media-update.input';

@ArgsType()
export class UpsertOneMediaArgs {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: MediaWhereUniqueInput;

    @Field(() => MediaCreateInput, {nullable:false})
    create!: MediaCreateInput;

    @Field(() => MediaUpdateInput, {nullable:false})
    update!: MediaUpdateInput;
}
