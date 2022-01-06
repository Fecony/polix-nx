import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaUpdateManyMutationInput } from './media-update-many-mutation.input';
import { MediaWhereInput } from './media-where.input';

@ArgsType()
export class UpdateManyMediaArgs {

    @Field(() => MediaUpdateManyMutationInput, {nullable:false})
    data!: MediaUpdateManyMutationInput;

    @Field(() => MediaWhereInput, {nullable:true})
    where?: MediaWhereInput;
}
