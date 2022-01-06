import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionRelationFilter } from '../region/region-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReportListRelationFilter } from '../report/report-list-relation-filter.input';

@InputType()
export class CityWhereInput {

    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => RegionRelationFilter, {nullable:true})
    region?: RegionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    regionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: ReportListRelationFilter;
}
