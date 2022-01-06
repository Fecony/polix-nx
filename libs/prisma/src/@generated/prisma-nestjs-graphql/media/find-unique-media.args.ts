import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@ArgsType()
export class FindUniqueMediaArgs {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: MediaWhereUniqueInput;
}
