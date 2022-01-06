import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MediaCount {

    @Field(() => Int, {nullable:false})
    reportMedia!: number;
}
