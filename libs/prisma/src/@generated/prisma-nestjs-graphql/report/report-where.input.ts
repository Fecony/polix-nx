import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CityRelationFilter } from '../city/city-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { ReportMediaListRelationFilter } from '../report-media/report-media-list-relation-filter.input';

@InputType()
export class ReportWhereInput {

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    city?: CityRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    cityId?: IntNullableFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => ReportMediaListRelationFilter, {nullable:true})
    media?: ReportMediaListRelationFilter;
}
