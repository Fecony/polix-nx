import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
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

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @HideField()
    SocialAccount?: Array<SocialAccount>;

    @HideField()
    reports?: Array<Report>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
