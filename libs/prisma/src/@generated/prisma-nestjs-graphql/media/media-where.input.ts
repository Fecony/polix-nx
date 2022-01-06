import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReportMediaListRelationFilter } from '../report-media/report-media-list-relation-filter.input';

@InputType()
export class MediaWhereInput {

    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ReportMediaListRelationFilter, {nullable:true})
    reportMedia?: ReportMediaListRelationFilter;
}
