import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReportWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
