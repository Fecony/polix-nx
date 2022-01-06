import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SocialAccount } from '../social-account/social-account.model';
import { Report } from '../report/report.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [SocialAccount], {nullable:true})
    SocialAccount?: Array<SocialAccount>;

    @Field(() => [Report], {nullable:true})
    reports?: Array<Report>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
