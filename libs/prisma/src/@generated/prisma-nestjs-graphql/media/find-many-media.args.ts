import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { MediaOrderByWithRelationInput } from './media-order-by-with-relation.input';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaScalarFieldEnum } from './media-scalar-field.enum';

@ArgsType()
export class FindManyMediaArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    where?: MediaWhereInput;

    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: MediaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MediaScalarFieldEnum>;
}
