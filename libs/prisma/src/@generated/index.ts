import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SocialAccountScalarFieldEnum {
    id = "id",
    provider = "provider",
    providerId = "providerId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ReportMediaScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reportId = "reportId",
    mediaId = "mediaId"
}

export enum ReportScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    cityId = "cityId"
}

export enum RegionScalarFieldEnum {
    id = "id",
    name = "name",
    countryId = "countryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum MediaScalarFieldEnum {
    id = "id",
    path = "path",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CountryScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    regionId = "regionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(RegionScalarFieldEnum, { name: 'RegionScalarFieldEnum', description: undefined })
registerEnumType(ReportScalarFieldEnum, { name: 'ReportScalarFieldEnum', description: undefined })
registerEnumType(ReportMediaScalarFieldEnum, { name: 'ReportMediaScalarFieldEnum', description: undefined })
registerEnumType(SocialAccountScalarFieldEnum, { name: 'SocialAccountScalarFieldEnum', description: undefined })
registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCity {
    @Field(() => CityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregate>;
    @Field(() => CitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregate>;
}

@ArgsType()
export class CityAggregateArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    @Field(() => CitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}

@InputType()
export class CityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    regionId?: true;
}

@ObjectType()
export class CityAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    regionId?: number;
}

@InputType()
export class CityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
}

@InputType()
export class CityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    regionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CityCount {
    @Field(() => Int, {nullable:false})
    reports!: number;
}

@InputType()
export class CityCreateManyRegionInputEnvelope {
    @Field(() => [CityCreateManyRegionInput], {nullable:false})
    data!: Array<CityCreateManyRegionInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CityCreateManyRegionInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateNestedManyWithoutRegionInput {
    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;
    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;
    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CityCreateManyRegionInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;
}

@InputType()
export class CityCreateNestedOneWithoutReportsInput {
    @Field(() => CityCreateWithoutReportsInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutReportsInput>;
    @Field(() => CityCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutReportsInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
}

@InputType()
export class CityCreateOrConnectWithoutRegionInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutRegionInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutRegionInput>;
}

@InputType()
export class CityCreateOrConnectWithoutReportsInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutReportsInput>;
}

@InputType()
export class CityCreateWithoutRegionInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateWithoutReportsInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RegionCreateNestedOneWithoutCityInput, {nullable:false})
    region!: InstanceType<typeof RegionCreateNestedOneWithoutCityInput>;
}

@InputType()
export class CityCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RegionCreateNestedOneWithoutCityInput, {nullable:false})
    region!: InstanceType<typeof RegionCreateNestedOneWithoutCityInput>;
    @Field(() => ReportCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportCreateNestedManyWithoutCityInput>;
}

@ArgsType()
export class CityGroupByArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithAggregationInput>;
    @Field(() => [CityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CityScalarFieldEnum>;
    @Field(() => CityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    @Field(() => CitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}

@ObjectType()
export class CityGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => CityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregate>;
    @Field(() => CitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregate>;
}

@InputType()
export class CityListRelationFilter {
    @Field(() => CityWhereInput, {nullable:true})
    every?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    some?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    none?: InstanceType<typeof CityWhereInput>;
}

@InputType()
export class CityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    regionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    regionId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class CityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    regionId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    regionId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class CityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    @Field(() => CityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    @Field(() => CityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    @Field(() => CityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    @Field(() => CitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}

@InputType()
export class CityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => RegionOrderByWithRelationInput, {nullable:true})
    region?: InstanceType<typeof RegionOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: InstanceType<typeof ReportOrderByRelationAggregateInput>;
}

@InputType()
export class CityRelationFilter {
    @Field(() => CityWhereInput, {nullable:true})
    is?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CityWhereInput>;
}

@InputType()
export class CityScalarWhereWithAggregatesInput {
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    regionId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CityScalarWhereInput {
    @Field(() => [CityScalarWhereInput], {nullable:true})
    AND?: Array<CityScalarWhereInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    OR?: Array<CityScalarWhereInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    NOT?: Array<CityScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    regionId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    regionId?: true;
}

@ObjectType()
export class CitySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    regionId?: number;
}

@InputType()
export class CitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;
}

@InputType()
export class CityUncheckedCreateNestedManyWithoutRegionInput {
    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;
    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;
    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CityCreateManyRegionInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;
}

@InputType()
export class CityUncheckedCreateWithoutRegionInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateWithoutReportsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateManyWithoutCityInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUncheckedUpdateManyWithoutRegionInput {
    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;
    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;
    @Field(() => [CityUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    upsert?: Array<CityUpsertWithWhereUniqueWithoutRegionInput>;
    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CityCreateManyRegionInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    set?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    disconnect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    delete?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    update?: Array<CityUpdateWithWhereUniqueWithoutRegionInput>;
    @Field(() => [CityUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    updateMany?: Array<CityUpdateManyWithWhereWithoutRegionInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    deleteMany?: Array<CityScalarWhereInput>;
}

@InputType()
export class CityUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutRegionInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUncheckedUpdateManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutReportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUncheckedUpdateManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUpdateManyWithWhereWithoutRegionInput {
    @Field(() => CityScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof CityScalarWhereInput>;
    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateManyMutationInput>;
}

@InputType()
export class CityUpdateManyWithoutRegionInput {
    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    create?: Array<CityCreateWithoutRegionInput>;
    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;
    @Field(() => [CityUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    upsert?: Array<CityUpsertWithWhereUniqueWithoutRegionInput>;
    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CityCreateManyRegionInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    set?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    disconnect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    delete?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    connect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    update?: Array<CityUpdateWithWhereUniqueWithoutRegionInput>;
    @Field(() => [CityUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    updateMany?: Array<CityUpdateManyWithWhereWithoutRegionInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    deleteMany?: Array<CityScalarWhereInput>;
}

@InputType()
export class CityUpdateOneWithoutReportsInput {
    @Field(() => CityCreateWithoutReportsInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutReportsInput>;
    @Field(() => CityCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutReportsInput>;
    @Field(() => CityUpsertWithoutReportsInput, {nullable:true})
    upsert?: InstanceType<typeof CityUpsertWithoutReportsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutReportsInput, {nullable:true})
    update?: InstanceType<typeof CityUpdateWithoutReportsInput>;
}

@InputType()
export class CityUpdateWithWhereUniqueWithoutRegionInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutRegionInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateWithoutRegionInput>;
}

@InputType()
export class CityUpdateWithoutRegionInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUpdateManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateWithoutReportsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RegionUpdateOneRequiredWithoutCityInput, {nullable:true})
    region?: InstanceType<typeof RegionUpdateOneRequiredWithoutCityInput>;
}

@InputType()
export class CityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RegionUpdateOneRequiredWithoutCityInput, {nullable:true})
    region?: InstanceType<typeof RegionUpdateOneRequiredWithoutCityInput>;
    @Field(() => ReportUpdateManyWithoutCityInput, {nullable:true})
    reports?: InstanceType<typeof ReportUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpsertWithWhereUniqueWithoutRegionInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutRegionInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateWithoutRegionInput>;
    @Field(() => CityCreateWithoutRegionInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutRegionInput>;
}

@InputType()
export class CityUpsertWithoutReportsInput {
    @Field(() => CityUpdateWithoutReportsInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateWithoutReportsInput>;
    @Field(() => CityCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutReportsInput>;
}

@InputType()
export class CityWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CityWhereInput {
    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => RegionRelationFilter, {nullable:true})
    region?: InstanceType<typeof RegionRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    regionId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: InstanceType<typeof ReportListRelationFilter>;
}

@ObjectType()
export class City {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    region?: InstanceType<typeof Region>;
    @Field(() => Int, {nullable:false})
    regionId!: number;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    reports?: Array<Report>;
    @Field(() => CityCount, {nullable:false})
    _count?: InstanceType<typeof CityCount>;
}

@ArgsType()
export class CreateManyCityArgs {
    @Field(() => [CityCreateManyInput], {nullable:false})
    data!: Array<CityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCityArgs {
    @Field(() => CityCreateInput, {nullable:false})
    data!: InstanceType<typeof CityCreateInput>;
}

@ArgsType()
export class DeleteManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class DeleteOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}

@ArgsType()
export class FindManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCityArgs {
    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateManyMutationInput>;
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class UpdateOneCityArgs {
    @Field(() => CityUpdateInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateInput>;
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateInput, {nullable:false})
    create!: InstanceType<typeof CityCreateInput>;
    @Field(() => CityUpdateInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateInput>;
}

@ObjectType()
export class AggregateCountry {
    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregate>;
    @Field(() => CountryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregate>;
    @Field(() => CountrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregate>;
    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregate>;
    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregate>;
}

@ArgsType()
export class CountryAggregateArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CountryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregateInput>;
    @Field(() => CountryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregateInput>;
    @Field(() => CountrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregateInput>;
    @Field(() => CountryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregateInput>;
    @Field(() => CountryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregateInput>;
}

@InputType()
export class CountryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CountryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CountryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CountryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CountryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CountryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CountryCount {
    @Field(() => Int, {nullable:false})
    region!: number;
}

@InputType()
export class CountryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryCreateNestedOneWithoutRegionInput {
    @Field(() => CountryCreateWithoutRegionInput, {nullable:true})
    create?: InstanceType<typeof CountryCreateWithoutRegionInput>;
    @Field(() => CountryCreateOrConnectWithoutRegionInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutRegionInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
}

@InputType()
export class CountryCreateOrConnectWithoutRegionInput {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryCreateWithoutRegionInput, {nullable:false})
    create!: InstanceType<typeof CountryCreateWithoutRegionInput>;
}

@InputType()
export class CountryCreateWithoutRegionInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RegionCreateNestedManyWithoutCountryInput, {nullable:true})
    region?: InstanceType<typeof RegionCreateNestedManyWithoutCountryInput>;
}

@ArgsType()
export class CountryGroupByArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithAggregationInput>;
    @Field(() => [CountryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CountryScalarFieldEnum>;
    @Field(() => CountryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CountryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CountryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregateInput>;
    @Field(() => CountryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregateInput>;
    @Field(() => CountrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregateInput>;
    @Field(() => CountryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregateInput>;
    @Field(() => CountryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregateInput>;
}

@ObjectType()
export class CountryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregate>;
    @Field(() => CountryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregate>;
    @Field(() => CountrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregate>;
    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregate>;
    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregate>;
}

@InputType()
export class CountryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CountryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class CountryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CountryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CountryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class CountryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CountryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CountryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountOrderByAggregateInput>;
    @Field(() => CountryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgOrderByAggregateInput>;
    @Field(() => CountryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxOrderByAggregateInput>;
    @Field(() => CountryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinOrderByAggregateInput>;
    @Field(() => CountrySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumOrderByAggregateInput>;
}

@InputType()
export class CountryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    region?: InstanceType<typeof RegionOrderByRelationAggregateInput>;
}

@InputType()
export class CountryRelationFilter {
    @Field(() => CountryWhereInput, {nullable:true})
    is?: InstanceType<typeof CountryWhereInput>;
    @Field(() => CountryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CountryWhereInput>;
}

@InputType()
export class CountryScalarWhereWithAggregatesInput {
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CountrySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CountrySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CountrySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CountryUncheckedCreateWithoutRegionInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RegionUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    region?: InstanceType<typeof RegionUncheckedCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CountryUncheckedUpdateWithoutRegionInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CountryUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RegionUncheckedUpdateManyWithoutCountryInput, {nullable:true})
    region?: InstanceType<typeof RegionUncheckedUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CountryUpdateOneRequiredWithoutRegionInput {
    @Field(() => CountryCreateWithoutRegionInput, {nullable:true})
    create?: InstanceType<typeof CountryCreateWithoutRegionInput>;
    @Field(() => CountryCreateOrConnectWithoutRegionInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutRegionInput>;
    @Field(() => CountryUpsertWithoutRegionInput, {nullable:true})
    upsert?: InstanceType<typeof CountryUpsertWithoutRegionInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryUpdateWithoutRegionInput, {nullable:true})
    update?: InstanceType<typeof CountryUpdateWithoutRegionInput>;
}

@InputType()
export class CountryUpdateWithoutRegionInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CountryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RegionUpdateManyWithoutCountryInput, {nullable:true})
    region?: InstanceType<typeof RegionUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpsertWithoutRegionInput {
    @Field(() => CountryUpdateWithoutRegionInput, {nullable:false})
    update!: InstanceType<typeof CountryUpdateWithoutRegionInput>;
    @Field(() => CountryCreateWithoutRegionInput, {nullable:false})
    create!: InstanceType<typeof CountryCreateWithoutRegionInput>;
}

@InputType()
export class CountryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class CountryWhereInput {
    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;
    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;
    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => RegionListRelationFilter, {nullable:true})
    region?: InstanceType<typeof RegionListRelationFilter>;
}

@ObjectType()
export class Country {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    region?: Array<Region>;
    @Field(() => CountryCount, {nullable:false})
    _count?: InstanceType<typeof CountryCount>;
}

@ArgsType()
export class CreateManyCountryArgs {
    @Field(() => [CountryCreateManyInput], {nullable:false})
    data!: Array<CountryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCountryArgs {
    @Field(() => CountryCreateInput, {nullable:false})
    data!: InstanceType<typeof CountryCreateInput>;
}

@ArgsType()
export class DeleteManyCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
}

@ArgsType()
export class DeleteOneCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCountryArgs {
    @Field(() => CountryUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CountryUpdateManyMutationInput>;
    @Field(() => CountryWhereInput, {nullable:true})
    where?: InstanceType<typeof CountryWhereInput>;
}

@ArgsType()
export class UpdateOneCountryArgs {
    @Field(() => CountryUpdateInput, {nullable:false})
    data!: InstanceType<typeof CountryUpdateInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryCreateInput, {nullable:false})
    create!: InstanceType<typeof CountryCreateInput>;
    @Field(() => CountryUpdateInput, {nullable:false})
    update!: InstanceType<typeof CountryUpdateInput>;
}

@ObjectType()
export class AggregateMedia {
    @Field(() => MediaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MediaCountAggregate>;
    @Field(() => MediaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MediaAvgAggregate>;
    @Field(() => MediaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MediaSumAggregate>;
    @Field(() => MediaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MediaMinAggregate>;
    @Field(() => MediaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MediaMaxAggregate>;
}

@ArgsType()
export class CreateManyMediaArgs {
    @Field(() => [MediaCreateManyInput], {nullable:false})
    data!: Array<MediaCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneMediaArgs {
    @Field(() => MediaCreateInput, {nullable:false})
    data!: InstanceType<typeof MediaCreateInput>;
}

@ArgsType()
export class DeleteManyMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
}

@ArgsType()
export class DeleteOneMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MediaWhereUniqueInput>;
}

@ArgsType()
export class FindFirstMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MediaScalarFieldEnum>;
}

@ArgsType()
export class FindManyMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MediaScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MediaWhereUniqueInput>;
}

@ArgsType()
export class MediaAggregateArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MediaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MediaCountAggregateInput>;
    @Field(() => MediaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MediaAvgAggregateInput>;
    @Field(() => MediaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MediaSumAggregateInput>;
    @Field(() => MediaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MediaMinAggregateInput>;
    @Field(() => MediaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MediaMaxAggregateInput>;
}

@InputType()
export class MediaAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MediaAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class MediaAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MediaCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MediaCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    path!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MediaCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class MediaCount {
    @Field(() => Int, {nullable:false})
    reportMedia!: number;
}

@InputType()
export class MediaCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaCreateNestedOneWithoutReportMediaInput {
    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:true})
    create?: InstanceType<typeof MediaCreateWithoutReportMediaInput>;
    @Field(() => MediaCreateOrConnectWithoutReportMediaInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof MediaCreateOrConnectWithoutReportMediaInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof MediaWhereUniqueInput>;
}

@InputType()
export class MediaCreateOrConnectWithoutReportMediaInput {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:false})
    create!: InstanceType<typeof MediaCreateWithoutReportMediaInput>;
}

@InputType()
export class MediaCreateWithoutReportMediaInput {
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaCreateInput {
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportMediaCreateNestedManyWithoutMediaInput, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaCreateNestedManyWithoutMediaInput>;
}

@ArgsType()
export class MediaGroupByArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithAggregationInput>;
    @Field(() => [MediaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MediaScalarFieldEnum>;
    @Field(() => MediaScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MediaScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MediaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MediaCountAggregateInput>;
    @Field(() => MediaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MediaAvgAggregateInput>;
    @Field(() => MediaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MediaSumAggregateInput>;
    @Field(() => MediaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MediaMinAggregateInput>;
    @Field(() => MediaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MediaMaxAggregateInput>;
}

@ObjectType()
export class MediaGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => MediaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MediaCountAggregate>;
    @Field(() => MediaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MediaAvgAggregate>;
    @Field(() => MediaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MediaSumAggregate>;
    @Field(() => MediaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MediaMinAggregate>;
    @Field(() => MediaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MediaMaxAggregate>;
}

@InputType()
export class MediaMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MediaMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    path?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class MediaMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MediaMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MediaMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    path?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class MediaMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MediaOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => MediaCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MediaCountOrderByAggregateInput>;
    @Field(() => MediaAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MediaAvgOrderByAggregateInput>;
    @Field(() => MediaMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MediaMaxOrderByAggregateInput>;
    @Field(() => MediaMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MediaMinOrderByAggregateInput>;
    @Field(() => MediaSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MediaSumOrderByAggregateInput>;
}

@InputType()
export class MediaOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ReportMediaOrderByRelationAggregateInput, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaOrderByRelationAggregateInput>;
}

@InputType()
export class MediaRelationFilter {
    @Field(() => MediaWhereInput, {nullable:true})
    is?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MediaWhereInput>;
}

@InputType()
export class MediaScalarWhereWithAggregatesInput {
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class MediaSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MediaSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class MediaSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MediaUncheckedCreateWithoutReportMediaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutMediaInput, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaUncheckedCreateNestedManyWithoutMediaInput>;
}

@InputType()
export class MediaUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUncheckedUpdateWithoutReportMediaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUncheckedUpdateManyWithoutMediaInput, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaUncheckedUpdateManyWithoutMediaInput>;
}

@InputType()
export class MediaUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUpdateOneRequiredWithoutReportMediaInput {
    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:true})
    create?: InstanceType<typeof MediaCreateWithoutReportMediaInput>;
    @Field(() => MediaCreateOrConnectWithoutReportMediaInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof MediaCreateOrConnectWithoutReportMediaInput>;
    @Field(() => MediaUpsertWithoutReportMediaInput, {nullable:true})
    upsert?: InstanceType<typeof MediaUpsertWithoutReportMediaInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => MediaUpdateWithoutReportMediaInput, {nullable:true})
    update?: InstanceType<typeof MediaUpdateWithoutReportMediaInput>;
}

@InputType()
export class MediaUpdateWithoutReportMediaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUpdateManyWithoutMediaInput, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaUpdateManyWithoutMediaInput>;
}

@InputType()
export class MediaUpsertWithoutReportMediaInput {
    @Field(() => MediaUpdateWithoutReportMediaInput, {nullable:false})
    update!: InstanceType<typeof MediaUpdateWithoutReportMediaInput>;
    @Field(() => MediaCreateWithoutReportMediaInput, {nullable:false})
    create!: InstanceType<typeof MediaCreateWithoutReportMediaInput>;
}

@InputType()
export class MediaWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class MediaWhereInput {
    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ReportMediaListRelationFilter, {nullable:true})
    reportMedia?: InstanceType<typeof ReportMediaListRelationFilter>;
}

@ObjectType()
export class Media {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    path!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    reportMedia?: Array<ReportMedia>;
    @Field(() => MediaCount, {nullable:false})
    _count?: InstanceType<typeof MediaCount>;
}

@ArgsType()
export class UpdateManyMediaArgs {
    @Field(() => MediaUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof MediaUpdateManyMutationInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    where?: InstanceType<typeof MediaWhereInput>;
}

@ArgsType()
export class UpdateOneMediaArgs {
    @Field(() => MediaUpdateInput, {nullable:false})
    data!: InstanceType<typeof MediaUpdateInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MediaWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MediaWhereUniqueInput>;
    @Field(() => MediaCreateInput, {nullable:false})
    create!: InstanceType<typeof MediaCreateInput>;
    @Field(() => MediaUpdateInput, {nullable:false})
    update!: InstanceType<typeof MediaUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BigIntFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: bigint | number;
    @Field(() => String, {nullable:true})
    increment?: bigint | number;
    @Field(() => String, {nullable:true})
    decrement?: bigint | number;
    @Field(() => String, {nullable:true})
    multiply?: bigint | number;
    @Field(() => String, {nullable:true})
    divide?: bigint | number;
}

@InputType()
export class BigIntFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class BigIntWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBigIntFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class NestedBigIntWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: bigint | number;
    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;
    @Field(() => String, {nullable:true})
    lt?: bigint | number;
    @Field(() => String, {nullable:true})
    lte?: bigint | number;
    @Field(() => String, {nullable:true})
    gt?: bigint | number;
    @Field(() => String, {nullable:true})
    gte?: bigint | number;
    @Field(() => NestedBigIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBigIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBigIntFilter>;
    @Field(() => NestedBigIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBigIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateRegion {
    @Field(() => RegionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RegionCountAggregate>;
    @Field(() => RegionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RegionAvgAggregate>;
    @Field(() => RegionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RegionSumAggregate>;
    @Field(() => RegionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RegionMinAggregate>;
    @Field(() => RegionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RegionMaxAggregate>;
}

@ArgsType()
export class CreateManyRegionArgs {
    @Field(() => [RegionCreateManyInput], {nullable:false})
    data!: Array<RegionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRegionArgs {
    @Field(() => RegionCreateInput, {nullable:false})
    data!: InstanceType<typeof RegionCreateInput>;
}

@ArgsType()
export class DeleteManyRegionArgs {
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
}

@ArgsType()
export class DeleteOneRegionArgs {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
}

@ArgsType()
export class FindFirstRegionArgs {
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
    @Field(() => [RegionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithRelationInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RegionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}

@ArgsType()
export class FindManyRegionArgs {
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
    @Field(() => [RegionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithRelationInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RegionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRegionArgs {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
}

@ArgsType()
export class RegionAggregateArgs {
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
    @Field(() => [RegionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithRelationInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RegionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RegionCountAggregateInput>;
    @Field(() => RegionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RegionAvgAggregateInput>;
    @Field(() => RegionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RegionSumAggregateInput>;
    @Field(() => RegionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RegionMinAggregateInput>;
    @Field(() => RegionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RegionMaxAggregateInput>;
}

@InputType()
export class RegionAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class RegionAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    countryId?: number;
}

@InputType()
export class RegionAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class RegionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RegionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RegionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class RegionCount {
    @Field(() => Int, {nullable:false})
    city!: number;
}

@InputType()
export class RegionCreateManyCountryInputEnvelope {
    @Field(() => [RegionCreateManyCountryInput], {nullable:false})
    data!: Array<RegionCreateManyCountryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RegionCreateManyCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class RegionCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class RegionCreateNestedManyWithoutCountryInput {
    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;
    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;
    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof RegionCreateManyCountryInputEnvelope>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;
}

@InputType()
export class RegionCreateNestedOneWithoutCityInput {
    @Field(() => RegionCreateWithoutCityInput, {nullable:true})
    create?: InstanceType<typeof RegionCreateWithoutCityInput>;
    @Field(() => RegionCreateOrConnectWithoutCityInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof RegionCreateOrConnectWithoutCityInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof RegionWhereUniqueInput>;
}

@InputType()
export class RegionCreateOrConnectWithoutCityInput {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof RegionCreateWithoutCityInput>;
}

@InputType()
export class RegionCreateOrConnectWithoutCountryInput {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionCreateWithoutCountryInput, {nullable:false})
    create!: InstanceType<typeof RegionCreateWithoutCountryInput>;
}

@InputType()
export class RegionCreateWithoutCityInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CountryCreateNestedOneWithoutRegionInput, {nullable:false})
    country!: InstanceType<typeof CountryCreateNestedOneWithoutRegionInput>;
}

@InputType()
export class RegionCreateWithoutCountryInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedManyWithoutRegionInput>;
}

@InputType()
export class RegionCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CountryCreateNestedOneWithoutRegionInput, {nullable:false})
    country!: InstanceType<typeof CountryCreateNestedOneWithoutRegionInput>;
    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedManyWithoutRegionInput>;
}

@ArgsType()
export class RegionGroupByArgs {
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
    @Field(() => [RegionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithAggregationInput>;
    @Field(() => [RegionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RegionScalarFieldEnum>;
    @Field(() => RegionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RegionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RegionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RegionCountAggregateInput>;
    @Field(() => RegionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RegionAvgAggregateInput>;
    @Field(() => RegionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RegionSumAggregateInput>;
    @Field(() => RegionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RegionMinAggregateInput>;
    @Field(() => RegionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RegionMaxAggregateInput>;
}

@ObjectType()
export class RegionGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => RegionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RegionCountAggregate>;
    @Field(() => RegionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RegionAvgAggregate>;
    @Field(() => RegionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RegionSumAggregate>;
    @Field(() => RegionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RegionMinAggregate>;
    @Field(() => RegionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RegionMaxAggregate>;
}

@InputType()
export class RegionListRelationFilter {
    @Field(() => RegionWhereInput, {nullable:true})
    every?: InstanceType<typeof RegionWhereInput>;
    @Field(() => RegionWhereInput, {nullable:true})
    some?: InstanceType<typeof RegionWhereInput>;
    @Field(() => RegionWhereInput, {nullable:true})
    none?: InstanceType<typeof RegionWhereInput>;
}

@InputType()
export class RegionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class RegionMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class RegionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class RegionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class RegionMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class RegionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class RegionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class RegionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => RegionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RegionCountOrderByAggregateInput>;
    @Field(() => RegionAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RegionAvgOrderByAggregateInput>;
    @Field(() => RegionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RegionMaxOrderByAggregateInput>;
    @Field(() => RegionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RegionMinOrderByAggregateInput>;
    @Field(() => RegionSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RegionSumOrderByAggregateInput>;
}

@InputType()
export class RegionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: InstanceType<typeof CountryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CityOrderByRelationAggregateInput, {nullable:true})
    city?: InstanceType<typeof CityOrderByRelationAggregateInput>;
}

@InputType()
export class RegionRelationFilter {
    @Field(() => RegionWhereInput, {nullable:true})
    is?: InstanceType<typeof RegionWhereInput>;
    @Field(() => RegionWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RegionWhereInput>;
}

@InputType()
export class RegionScalarWhereWithAggregatesInput {
    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RegionScalarWhereWithAggregatesInput>;
    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RegionScalarWhereWithAggregatesInput>;
    @Field(() => [RegionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RegionScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    countryId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class RegionScalarWhereInput {
    @Field(() => [RegionScalarWhereInput], {nullable:true})
    AND?: Array<RegionScalarWhereInput>;
    @Field(() => [RegionScalarWhereInput], {nullable:true})
    OR?: Array<RegionScalarWhereInput>;
    @Field(() => [RegionScalarWhereInput], {nullable:true})
    NOT?: Array<RegionScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class RegionSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class RegionSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class RegionSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class RegionUncheckedCreateNestedManyWithoutCountryInput {
    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;
    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;
    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof RegionCreateManyCountryInputEnvelope>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;
}

@InputType()
export class RegionUncheckedCreateWithoutCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class RegionUncheckedCreateWithoutCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutRegionInput>;
}

@InputType()
export class RegionUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutRegionInput>;
}

@InputType()
export class RegionUncheckedUpdateManyWithoutCountryInput {
    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;
    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;
    @Field(() => [RegionUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof RegionCreateManyCountryInputEnvelope>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    set?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    disconnect?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    delete?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<RegionUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [RegionUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<RegionUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [RegionScalarWhereInput], {nullable:true})
    deleteMany?: Array<RegionScalarWhereInput>;
}

@InputType()
export class RegionUncheckedUpdateManyWithoutRegionInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RegionUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RegionUncheckedUpdateWithoutCityInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RegionUncheckedUpdateWithoutCountryInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUncheckedUpdateManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUncheckedUpdateManyWithoutRegionInput>;
}

@InputType()
export class RegionUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUncheckedUpdateManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUncheckedUpdateManyWithoutRegionInput>;
}

@InputType()
export class RegionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RegionUpdateManyWithWhereWithoutCountryInput {
    @Field(() => RegionScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof RegionScalarWhereInput>;
    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof RegionUpdateManyMutationInput>;
}

@InputType()
export class RegionUpdateManyWithoutCountryInput {
    @Field(() => [RegionCreateWithoutCountryInput], {nullable:true})
    create?: Array<RegionCreateWithoutCountryInput>;
    @Field(() => [RegionCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<RegionCreateOrConnectWithoutCountryInput>;
    @Field(() => [RegionUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => RegionCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof RegionCreateManyCountryInputEnvelope>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    set?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    disconnect?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    delete?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    connect?: Array<RegionWhereUniqueInput>;
    @Field(() => [RegionUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<RegionUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [RegionUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<RegionUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [RegionScalarWhereInput], {nullable:true})
    deleteMany?: Array<RegionScalarWhereInput>;
}

@InputType()
export class RegionUpdateOneRequiredWithoutCityInput {
    @Field(() => RegionCreateWithoutCityInput, {nullable:true})
    create?: InstanceType<typeof RegionCreateWithoutCityInput>;
    @Field(() => RegionCreateOrConnectWithoutCityInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof RegionCreateOrConnectWithoutCityInput>;
    @Field(() => RegionUpsertWithoutCityInput, {nullable:true})
    upsert?: InstanceType<typeof RegionUpsertWithoutCityInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionUpdateWithoutCityInput, {nullable:true})
    update?: InstanceType<typeof RegionUpdateWithoutCityInput>;
}

@InputType()
export class RegionUpdateWithWhereUniqueWithoutCountryInput {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionUpdateWithoutCountryInput, {nullable:false})
    data!: InstanceType<typeof RegionUpdateWithoutCountryInput>;
}

@InputType()
export class RegionUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CountryUpdateOneRequiredWithoutRegionInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneRequiredWithoutRegionInput>;
}

@InputType()
export class RegionUpdateWithoutCountryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateManyWithoutRegionInput>;
}

@InputType()
export class RegionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CountryUpdateOneRequiredWithoutRegionInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneRequiredWithoutRegionInput>;
    @Field(() => CityUpdateManyWithoutRegionInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateManyWithoutRegionInput>;
}

@InputType()
export class RegionUpsertWithWhereUniqueWithoutCountryInput {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionUpdateWithoutCountryInput, {nullable:false})
    update!: InstanceType<typeof RegionUpdateWithoutCountryInput>;
    @Field(() => RegionCreateWithoutCountryInput, {nullable:false})
    create!: InstanceType<typeof RegionCreateWithoutCountryInput>;
}

@InputType()
export class RegionUpsertWithoutCityInput {
    @Field(() => RegionUpdateWithoutCityInput, {nullable:false})
    update!: InstanceType<typeof RegionUpdateWithoutCityInput>;
    @Field(() => RegionCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof RegionCreateWithoutCityInput>;
}

@InputType()
export class RegionWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class RegionWhereInput {
    @Field(() => [RegionWhereInput], {nullable:true})
    AND?: Array<RegionWhereInput>;
    @Field(() => [RegionWhereInput], {nullable:true})
    OR?: Array<RegionWhereInput>;
    @Field(() => [RegionWhereInput], {nullable:true})
    NOT?: Array<RegionWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => CountryRelationFilter, {nullable:true})
    country?: InstanceType<typeof CountryRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CityListRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityListRelationFilter>;
}

@ObjectType()
export class Region {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    country?: InstanceType<typeof Country>;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    city?: Array<City>;
    @Field(() => RegionCount, {nullable:false})
    _count?: InstanceType<typeof RegionCount>;
}

@ArgsType()
export class UpdateManyRegionArgs {
    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof RegionUpdateManyMutationInput>;
    @Field(() => RegionWhereInput, {nullable:true})
    where?: InstanceType<typeof RegionWhereInput>;
}

@ArgsType()
export class UpdateOneRegionArgs {
    @Field(() => RegionUpdateInput, {nullable:false})
    data!: InstanceType<typeof RegionUpdateInput>;
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneRegionArgs {
    @Field(() => RegionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof RegionWhereUniqueInput>;
    @Field(() => RegionCreateInput, {nullable:false})
    create!: InstanceType<typeof RegionCreateInput>;
    @Field(() => RegionUpdateInput, {nullable:false})
    update!: InstanceType<typeof RegionUpdateInput>;
}

@ObjectType()
export class AggregateReport {
    @Field(() => ReportCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReportCountAggregate>;
    @Field(() => ReportAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReportAvgAggregate>;
    @Field(() => ReportSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReportSumAggregate>;
    @Field(() => ReportMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReportMinAggregate>;
    @Field(() => ReportMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReportMaxAggregate>;
}

@ArgsType()
export class CreateManyReportArgs {
    @Field(() => [ReportCreateManyInput], {nullable:false})
    data!: Array<ReportCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReportArgs {
    @Field(() => ReportCreateInput, {nullable:false})
    data!: InstanceType<typeof ReportCreateInput>;
}

@ArgsType()
export class DeleteManyReportArgs {
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
}

@ArgsType()
export class DeleteOneReportArgs {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
}

@ArgsType()
export class FindFirstReportArgs {
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
    @Field(() => [ReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithRelationInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReportScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportScalarFieldEnum>;
}

@ArgsType()
export class FindManyReportArgs {
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
    @Field(() => [ReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithRelationInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReportScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueReportArgs {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
}

@ArgsType()
export class ReportAggregateArgs {
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
    @Field(() => [ReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithRelationInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReportCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportCountAggregateInput>;
    @Field(() => ReportAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportAvgAggregateInput>;
    @Field(() => ReportSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportSumAggregateInput>;
    @Field(() => ReportMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMinAggregateInput>;
    @Field(() => ReportMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMaxAggregateInput>;
}

@InputType()
export class ReportAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class ReportAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    userId?: number;
    @Field(() => Float, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class ReportCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReportCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReportCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@ObjectType()
export class ReportCount {
    @Field(() => Int, {nullable:false})
    tags!: number;
    @Field(() => Int, {nullable:false})
    media!: number;
}

@InputType()
export class ReportCreateManyCityInputEnvelope {
    @Field(() => [ReportCreateManyCityInput], {nullable:false})
    data!: Array<ReportCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReportCreateManyCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ReportCreateManyUserInputEnvelope {
    @Field(() => [ReportCreateManyUserInput], {nullable:false})
    data!: Array<ReportCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReportCreateManyUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportCreateNestedManyWithoutCityInput {
    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;
    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;
    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyCityInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}

@InputType()
export class ReportCreateNestedManyWithoutTagsInput {
    @Field(() => [ReportCreateWithoutTagsInput], {nullable:true})
    create?: Array<ReportCreateWithoutTagsInput>;
    @Field(() => [ReportCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTagsInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}

@InputType()
export class ReportCreateNestedManyWithoutUserInput {
    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;
    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;
    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyUserInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}

@InputType()
export class ReportCreateNestedOneWithoutMediaInput {
    @Field(() => ReportCreateWithoutMediaInput, {nullable:true})
    create?: InstanceType<typeof ReportCreateWithoutMediaInput>;
    @Field(() => ReportCreateOrConnectWithoutMediaInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ReportCreateOrConnectWithoutMediaInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ReportWhereUniqueInput>;
}

@InputType()
export class ReportCreateOrConnectWithoutCityInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutCityInput>;
}

@InputType()
export class ReportCreateOrConnectWithoutMediaInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportCreateWithoutMediaInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutMediaInput>;
}

@InputType()
export class ReportCreateOrConnectWithoutTagsInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportCreateWithoutTagsInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutTagsInput>;
}

@InputType()
export class ReportCreateOrConnectWithoutUserInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutUserInput>;
}

@InputType()
export class ReportCreateWithoutCityInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReportsInput>;
    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutReportsInput>;
    @Field(() => ReportMediaCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportCreateWithoutMediaInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReportsInput>;
    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutReportsInput>;
    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutReportsInput>;
}

@InputType()
export class ReportCreateWithoutTagsInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReportsInput>;
    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutReportsInput>;
    @Field(() => ReportMediaCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutReportsInput>;
    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutReportsInput>;
    @Field(() => ReportMediaCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportCreateInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReportsInput>;
    @Field(() => CityCreateNestedOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutReportsInput>;
    @Field(() => TagCreateNestedManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutReportsInput>;
    @Field(() => ReportMediaCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaCreateNestedManyWithoutReportInput>;
}

@ArgsType()
export class ReportGroupByArgs {
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
    @Field(() => [ReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithAggregationInput>;
    @Field(() => [ReportScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReportScalarFieldEnum>;
    @Field(() => ReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReportScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReportCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportCountAggregateInput>;
    @Field(() => ReportAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportAvgAggregateInput>;
    @Field(() => ReportSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportSumAggregateInput>;
    @Field(() => ReportMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMinAggregateInput>;
    @Field(() => ReportMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMaxAggregateInput>;
}

@ObjectType()
export class ReportGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => ReportCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReportCountAggregate>;
    @Field(() => ReportAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReportAvgAggregate>;
    @Field(() => ReportSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReportSumAggregate>;
    @Field(() => ReportMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReportMinAggregate>;
    @Field(() => ReportMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReportMaxAggregate>;
}

@InputType()
export class ReportListRelationFilter {
    @Field(() => ReportWhereInput, {nullable:true})
    every?: InstanceType<typeof ReportWhereInput>;
    @Field(() => ReportWhereInput, {nullable:true})
    some?: InstanceType<typeof ReportWhereInput>;
    @Field(() => ReportWhereInput, {nullable:true})
    none?: InstanceType<typeof ReportWhereInput>;
}

@InputType()
export class ReportMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class ReportMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class ReportMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class ReportOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ReportOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => ReportCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportCountOrderByAggregateInput>;
    @Field(() => ReportAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportAvgOrderByAggregateInput>;
    @Field(() => ReportMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMaxOrderByAggregateInput>;
    @Field(() => ReportMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMinOrderByAggregateInput>;
    @Field(() => ReportSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportSumOrderByAggregateInput>;
}

@InputType()
export class ReportOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: InstanceType<typeof TagOrderByRelationAggregateInput>;
    @Field(() => ReportMediaOrderByRelationAggregateInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaOrderByRelationAggregateInput>;
}

@InputType()
export class ReportRelationFilter {
    @Field(() => ReportWhereInput, {nullable:true})
    is?: InstanceType<typeof ReportWhereInput>;
    @Field(() => ReportWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ReportWhereInput>;
}

@InputType()
export class ReportScalarWhereWithAggregatesInput {
    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportScalarWhereWithAggregatesInput>;
    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportScalarWhereWithAggregatesInput>;
    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}

@InputType()
export class ReportScalarWhereInput {
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    AND?: Array<ReportScalarWhereInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    OR?: Array<ReportScalarWhereInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    NOT?: Array<ReportScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    cityId?: InstanceType<typeof IntNullableFilter>;
}

@InputType()
export class ReportSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class ReportSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class ReportUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;
    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;
    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyCityInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}

@InputType()
export class ReportUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;
    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;
    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyUserInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}

@InputType()
export class ReportUncheckedCreateWithoutCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedCreateWithoutMediaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class ReportUncheckedCreateWithoutTagsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => ReportMediaUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedCreateNestedManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedUpdateManyWithoutCityInput {
    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;
    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;
    @Field(() => [ReportUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyCityInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [ReportUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}

@InputType()
export class ReportUncheckedUpdateManyWithoutReportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportUncheckedUpdateManyWithoutUserInput {
    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;
    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;
    @Field(() => [ReportUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyUserInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReportUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}

@InputType()
export class ReportUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportUncheckedUpdateWithoutCityInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUncheckedUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedUpdateWithoutMediaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportUncheckedUpdateWithoutTagsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUncheckedUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUncheckedUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ReportMediaUncheckedUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUncheckedUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReportUpdateManyWithWhereWithoutCityInput {
    @Field(() => ReportScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ReportScalarWhereInput>;
    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateManyMutationInput>;
}

@InputType()
export class ReportUpdateManyWithWhereWithoutTagsInput {
    @Field(() => ReportScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ReportScalarWhereInput>;
    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateManyMutationInput>;
}

@InputType()
export class ReportUpdateManyWithWhereWithoutUserInput {
    @Field(() => ReportScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ReportScalarWhereInput>;
    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateManyMutationInput>;
}

@InputType()
export class ReportUpdateManyWithoutCityInput {
    @Field(() => [ReportCreateWithoutCityInput], {nullable:true})
    create?: Array<ReportCreateWithoutCityInput>;
    @Field(() => [ReportCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutCityInput>;
    @Field(() => [ReportUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => ReportCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyCityInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [ReportUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}

@InputType()
export class ReportUpdateManyWithoutTagsInput {
    @Field(() => [ReportCreateWithoutTagsInput], {nullable:true})
    create?: Array<ReportCreateWithoutTagsInput>;
    @Field(() => [ReportCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTagsInput>;
    @Field(() => [ReportUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [ReportUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}

@InputType()
export class ReportUpdateManyWithoutUserInput {
    @Field(() => [ReportCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUserInput>;
    @Field(() => [ReportCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUserInput>;
    @Field(() => [ReportUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReportCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportCreateManyUserInputEnvelope>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
    @Field(() => [ReportUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReportUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}

@InputType()
export class ReportUpdateOneRequiredWithoutMediaInput {
    @Field(() => ReportCreateWithoutMediaInput, {nullable:true})
    create?: InstanceType<typeof ReportCreateWithoutMediaInput>;
    @Field(() => ReportCreateOrConnectWithoutMediaInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ReportCreateOrConnectWithoutMediaInput>;
    @Field(() => ReportUpsertWithoutMediaInput, {nullable:true})
    upsert?: InstanceType<typeof ReportUpsertWithoutMediaInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutMediaInput, {nullable:true})
    update?: InstanceType<typeof ReportUpdateWithoutMediaInput>;
}

@InputType()
export class ReportUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutCityInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateWithoutCityInput>;
}

@InputType()
export class ReportUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutTagsInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateWithoutTagsInput>;
}

@InputType()
export class ReportUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateWithoutUserInput>;
}

@InputType()
export class ReportUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReportsInput>;
    @Field(() => TagUpdateManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutReportsInput>;
    @Field(() => ReportMediaUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUpdateWithoutMediaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReportsInput>;
    @Field(() => CityUpdateOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutReportsInput>;
    @Field(() => TagUpdateManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutReportsInput>;
}

@InputType()
export class ReportUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReportsInput>;
    @Field(() => CityUpdateOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutReportsInput>;
    @Field(() => ReportMediaUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutReportsInput>;
    @Field(() => TagUpdateManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutReportsInput>;
    @Field(() => ReportMediaUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutReportsInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReportsInput>;
    @Field(() => CityUpdateOneWithoutReportsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutReportsInput>;
    @Field(() => TagUpdateManyWithoutReportsInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutReportsInput>;
    @Field(() => ReportMediaUpdateManyWithoutReportInput, {nullable:true})
    media?: InstanceType<typeof ReportMediaUpdateManyWithoutReportInput>;
}

@InputType()
export class ReportUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutCityInput, {nullable:false})
    update!: InstanceType<typeof ReportUpdateWithoutCityInput>;
    @Field(() => ReportCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutCityInput>;
}

@InputType()
export class ReportUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutTagsInput, {nullable:false})
    update!: InstanceType<typeof ReportUpdateWithoutTagsInput>;
    @Field(() => ReportCreateWithoutTagsInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutTagsInput>;
}

@InputType()
export class ReportUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof ReportUpdateWithoutUserInput>;
    @Field(() => ReportCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutUserInput>;
}

@InputType()
export class ReportUpsertWithoutMediaInput {
    @Field(() => ReportUpdateWithoutMediaInput, {nullable:false})
    update!: InstanceType<typeof ReportUpdateWithoutMediaInput>;
    @Field(() => ReportCreateWithoutMediaInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateWithoutMediaInput>;
}

@InputType()
export class ReportWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class ReportWhereInput {
    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;
    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;
    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    cityId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
    @Field(() => ReportMediaListRelationFilter, {nullable:true})
    media?: InstanceType<typeof ReportMediaListRelationFilter>;
}

@ObjectType()
export class Report {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    user?: InstanceType<typeof User> | null;
    @Field(() => Int, {nullable:true})
    userId!: number | null;
    @HideField()
    city?: InstanceType<typeof City> | null;
    @Field(() => Int, {nullable:true})
    cityId!: number | null;
    @HideField()
    tags?: Array<Tag>;
    @HideField()
    media?: Array<ReportMedia>;
    @Field(() => ReportCount, {nullable:false})
    _count?: InstanceType<typeof ReportCount>;
}

@ArgsType()
export class UpdateManyReportArgs {
    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateManyMutationInput>;
    @Field(() => ReportWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportWhereInput>;
}

@ArgsType()
export class UpdateOneReportArgs {
    @Field(() => ReportUpdateInput, {nullable:false})
    data!: InstanceType<typeof ReportUpdateInput>;
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneReportArgs {
    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportWhereUniqueInput>;
    @Field(() => ReportCreateInput, {nullable:false})
    create!: InstanceType<typeof ReportCreateInput>;
    @Field(() => ReportUpdateInput, {nullable:false})
    update!: InstanceType<typeof ReportUpdateInput>;
}

@ObjectType()
export class AggregateReportMedia {
    @Field(() => ReportMediaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReportMediaCountAggregate>;
    @Field(() => ReportMediaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReportMediaAvgAggregate>;
    @Field(() => ReportMediaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReportMediaSumAggregate>;
    @Field(() => ReportMediaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReportMediaMinAggregate>;
    @Field(() => ReportMediaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReportMediaMaxAggregate>;
}

@ArgsType()
export class CreateManyReportMediaArgs {
    @Field(() => [ReportMediaCreateManyInput], {nullable:false})
    data!: Array<ReportMediaCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReportMediaArgs {
    @Field(() => ReportMediaCreateInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaCreateInput>;
}

@ArgsType()
export class DeleteManyReportMediaArgs {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
}

@ArgsType()
export class DeleteOneReportMediaArgs {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
}

@ArgsType()
export class FindFirstReportMediaArgs {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => [ReportMediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportMediaOrderByWithRelationInput>;
    @Field(() => ReportMediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReportMediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportMediaScalarFieldEnum>;
}

@ArgsType()
export class FindManyReportMediaArgs {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => [ReportMediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportMediaOrderByWithRelationInput>;
    @Field(() => ReportMediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReportMediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportMediaScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueReportMediaArgs {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
}

@ArgsType()
export class ReportMediaAggregateArgs {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => [ReportMediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportMediaOrderByWithRelationInput>;
    @Field(() => ReportMediaWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReportMediaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportMediaCountAggregateInput>;
    @Field(() => ReportMediaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportMediaAvgAggregateInput>;
    @Field(() => ReportMediaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportMediaSumAggregateInput>;
    @Field(() => ReportMediaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMediaMinAggregateInput>;
    @Field(() => ReportMediaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMediaMaxAggregateInput>;
}

@InputType()
export class ReportMediaAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    reportId?: true;
    @Field(() => Boolean, {nullable:true})
    mediaId?: true;
}

@ObjectType()
export class ReportMediaAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    reportId?: number;
    @Field(() => Float, {nullable:true})
    mediaId?: number;
}

@InputType()
export class ReportMediaAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    reportId?: true;
    @Field(() => Boolean, {nullable:true})
    mediaId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReportMediaCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    reportId!: number;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReportMediaCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaCreateManyMediaInputEnvelope {
    @Field(() => [ReportMediaCreateManyMediaInput], {nullable:false})
    data!: Array<ReportMediaCreateManyMediaInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReportMediaCreateManyMediaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    reportId!: number;
}

@InputType()
export class ReportMediaCreateManyReportInputEnvelope {
    @Field(() => [ReportMediaCreateManyReportInput], {nullable:false})
    data!: Array<ReportMediaCreateManyReportInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReportMediaCreateManyReportInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
}

@InputType()
export class ReportMediaCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    reportId!: number;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
}

@InputType()
export class ReportMediaCreateNestedManyWithoutMediaInput {
    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;
    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyMediaInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}

@InputType()
export class ReportMediaCreateNestedManyWithoutReportInput {
    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;
    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyReportInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}

@InputType()
export class ReportMediaCreateOrConnectWithoutMediaInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaCreateWithoutMediaInput, {nullable:false})
    create!: InstanceType<typeof ReportMediaCreateWithoutMediaInput>;
}

@InputType()
export class ReportMediaCreateOrConnectWithoutReportInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaCreateWithoutReportInput, {nullable:false})
    create!: InstanceType<typeof ReportMediaCreateWithoutReportInput>;
}

@InputType()
export class ReportMediaCreateWithoutMediaInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportCreateNestedOneWithoutMediaInput, {nullable:false})
    report!: InstanceType<typeof ReportCreateNestedOneWithoutMediaInput>;
}

@InputType()
export class ReportMediaCreateWithoutReportInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MediaCreateNestedOneWithoutReportMediaInput, {nullable:false})
    media!: InstanceType<typeof MediaCreateNestedOneWithoutReportMediaInput>;
}

@InputType()
export class ReportMediaCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportCreateNestedOneWithoutMediaInput, {nullable:false})
    report!: InstanceType<typeof ReportCreateNestedOneWithoutMediaInput>;
    @Field(() => MediaCreateNestedOneWithoutReportMediaInput, {nullable:false})
    media!: InstanceType<typeof MediaCreateNestedOneWithoutReportMediaInput>;
}

@ArgsType()
export class ReportMediaGroupByArgs {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => [ReportMediaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReportMediaOrderByWithAggregationInput>;
    @Field(() => [ReportMediaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReportMediaScalarFieldEnum>;
    @Field(() => ReportMediaScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReportMediaScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReportMediaCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportMediaCountAggregateInput>;
    @Field(() => ReportMediaAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportMediaAvgAggregateInput>;
    @Field(() => ReportMediaSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportMediaSumAggregateInput>;
    @Field(() => ReportMediaMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMediaMinAggregateInput>;
    @Field(() => ReportMediaMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMediaMaxAggregateInput>;
}

@ObjectType()
export class ReportMediaGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => Int, {nullable:false})
    reportId!: number;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
    @Field(() => ReportMediaCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReportMediaCountAggregate>;
    @Field(() => ReportMediaAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReportMediaAvgAggregate>;
    @Field(() => ReportMediaSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReportMediaSumAggregate>;
    @Field(() => ReportMediaMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReportMediaMinAggregate>;
    @Field(() => ReportMediaMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReportMediaMaxAggregate>;
}

@InputType()
export class ReportMediaListRelationFilter {
    @Field(() => ReportMediaWhereInput, {nullable:true})
    every?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => ReportMediaWhereInput, {nullable:true})
    some?: InstanceType<typeof ReportMediaWhereInput>;
    @Field(() => ReportMediaWhereInput, {nullable:true})
    none?: InstanceType<typeof ReportMediaWhereInput>;
}

@InputType()
export class ReportMediaMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    reportId?: true;
    @Field(() => Boolean, {nullable:true})
    mediaId?: true;
}

@ObjectType()
export class ReportMediaMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    reportId?: number;
    @Field(() => Int, {nullable:true})
    mediaId?: number;
}

@InputType()
export class ReportMediaMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    reportId?: true;
    @Field(() => Boolean, {nullable:true})
    mediaId?: true;
}

@ObjectType()
export class ReportMediaMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    reportId?: number;
    @Field(() => Int, {nullable:true})
    mediaId?: number;
}

@InputType()
export class ReportMediaMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
    @Field(() => ReportMediaCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReportMediaCountOrderByAggregateInput>;
    @Field(() => ReportMediaAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReportMediaAvgOrderByAggregateInput>;
    @Field(() => ReportMediaMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReportMediaMaxOrderByAggregateInput>;
    @Field(() => ReportMediaMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReportMediaMinOrderByAggregateInput>;
    @Field(() => ReportMediaSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReportMediaSumOrderByAggregateInput>;
}

@InputType()
export class ReportMediaOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ReportOrderByWithRelationInput, {nullable:true})
    report?: InstanceType<typeof ReportOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => MediaOrderByWithRelationInput, {nullable:true})
    media?: InstanceType<typeof MediaOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaScalarWhereWithAggregatesInput {
    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportMediaScalarWhereWithAggregatesInput>;
    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportMediaScalarWhereWithAggregatesInput>;
    @Field(() => [ReportMediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportMediaScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reportId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    mediaId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ReportMediaScalarWhereInput {
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    AND?: Array<ReportMediaScalarWhereInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    OR?: Array<ReportMediaScalarWhereInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    NOT?: Array<ReportMediaScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    reportId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    mediaId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ReportMediaSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    reportId?: true;
    @Field(() => Boolean, {nullable:true})
    mediaId?: true;
}

@ObjectType()
export class ReportMediaSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    reportId?: number;
    @Field(() => Int, {nullable:true})
    mediaId?: number;
}

@InputType()
export class ReportMediaSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;
}

@InputType()
export class ReportMediaUncheckedCreateNestedManyWithoutMediaInput {
    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;
    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyMediaInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}

@InputType()
export class ReportMediaUncheckedCreateNestedManyWithoutReportInput {
    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;
    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyReportInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
}

@InputType()
export class ReportMediaUncheckedCreateWithoutMediaInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    reportId!: number;
}

@InputType()
export class ReportMediaUncheckedCreateWithoutReportInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
}

@InputType()
export class ReportMediaUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    reportId!: number;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
}

@InputType()
export class ReportMediaUncheckedUpdateManyWithoutMediaInput {
    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;
    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutMediaInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutMediaInput>;
    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyMediaInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutMediaInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutMediaInput>;
    @Field(() => [ReportMediaUpdateManyWithWhereWithoutMediaInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutMediaInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateManyWithoutReportMediaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reportId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateManyWithoutReportInput {
    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;
    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutReportInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutReportInput>;
    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyReportInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutReportInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutReportInput>;
    @Field(() => [ReportMediaUpdateManyWithWhereWithoutReportInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutReportInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reportId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateWithoutMediaInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reportId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateWithoutReportInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reportId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReportMediaUpdateManyWithWhereWithoutMediaInput {
    @Field(() => ReportMediaScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaScalarWhereInput>;
    @Field(() => ReportMediaUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateManyMutationInput>;
}

@InputType()
export class ReportMediaUpdateManyWithWhereWithoutReportInput {
    @Field(() => ReportMediaScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaScalarWhereInput>;
    @Field(() => ReportMediaUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateManyMutationInput>;
}

@InputType()
export class ReportMediaUpdateManyWithoutMediaInput {
    @Field(() => [ReportMediaCreateWithoutMediaInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutMediaInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutMediaInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutMediaInput>;
    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutMediaInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutMediaInput>;
    @Field(() => ReportMediaCreateManyMediaInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyMediaInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutMediaInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutMediaInput>;
    @Field(() => [ReportMediaUpdateManyWithWhereWithoutMediaInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutMediaInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}

@InputType()
export class ReportMediaUpdateManyWithoutReportInput {
    @Field(() => [ReportMediaCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportMediaCreateWithoutReportInput>;
    @Field(() => [ReportMediaCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportMediaCreateOrConnectWithoutReportInput>;
    @Field(() => [ReportMediaUpsertWithWhereUniqueWithoutReportInput], {nullable:true})
    upsert?: Array<ReportMediaUpsertWithWhereUniqueWithoutReportInput>;
    @Field(() => ReportMediaCreateManyReportInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ReportMediaCreateManyReportInputEnvelope>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    set?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    delete?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaWhereUniqueInput], {nullable:true})
    connect?: Array<ReportMediaWhereUniqueInput>;
    @Field(() => [ReportMediaUpdateWithWhereUniqueWithoutReportInput], {nullable:true})
    update?: Array<ReportMediaUpdateWithWhereUniqueWithoutReportInput>;
    @Field(() => [ReportMediaUpdateManyWithWhereWithoutReportInput], {nullable:true})
    updateMany?: Array<ReportMediaUpdateManyWithWhereWithoutReportInput>;
    @Field(() => [ReportMediaScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportMediaScalarWhereInput>;
}

@InputType()
export class ReportMediaUpdateWithWhereUniqueWithoutMediaInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaUpdateWithoutMediaInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateWithoutMediaInput>;
}

@InputType()
export class ReportMediaUpdateWithWhereUniqueWithoutReportInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaUpdateWithoutReportInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateWithoutReportInput>;
}

@InputType()
export class ReportMediaUpdateWithoutMediaInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUpdateOneRequiredWithoutMediaInput, {nullable:true})
    report?: InstanceType<typeof ReportUpdateOneRequiredWithoutMediaInput>;
}

@InputType()
export class ReportMediaUpdateWithoutReportInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MediaUpdateOneRequiredWithoutReportMediaInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateOneRequiredWithoutReportMediaInput>;
}

@InputType()
export class ReportMediaUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUpdateOneRequiredWithoutMediaInput, {nullable:true})
    report?: InstanceType<typeof ReportUpdateOneRequiredWithoutMediaInput>;
    @Field(() => MediaUpdateOneRequiredWithoutReportMediaInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateOneRequiredWithoutReportMediaInput>;
}

@InputType()
export class ReportMediaUpsertWithWhereUniqueWithoutMediaInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaUpdateWithoutMediaInput, {nullable:false})
    update!: InstanceType<typeof ReportMediaUpdateWithoutMediaInput>;
    @Field(() => ReportMediaCreateWithoutMediaInput, {nullable:false})
    create!: InstanceType<typeof ReportMediaCreateWithoutMediaInput>;
}

@InputType()
export class ReportMediaUpsertWithWhereUniqueWithoutReportInput {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaUpdateWithoutReportInput, {nullable:false})
    update!: InstanceType<typeof ReportMediaUpdateWithoutReportInput>;
    @Field(() => ReportMediaCreateWithoutReportInput, {nullable:false})
    create!: InstanceType<typeof ReportMediaCreateWithoutReportInput>;
}

@InputType()
export class ReportMediaWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class ReportMediaWhereInput {
    @Field(() => [ReportMediaWhereInput], {nullable:true})
    AND?: Array<ReportMediaWhereInput>;
    @Field(() => [ReportMediaWhereInput], {nullable:true})
    OR?: Array<ReportMediaWhereInput>;
    @Field(() => [ReportMediaWhereInput], {nullable:true})
    NOT?: Array<ReportMediaWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ReportRelationFilter, {nullable:true})
    report?: InstanceType<typeof ReportRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    reportId?: InstanceType<typeof IntFilter>;
    @Field(() => MediaRelationFilter, {nullable:true})
    media?: InstanceType<typeof MediaRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    mediaId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class ReportMedia {
    @Field(() => ID, {nullable:false})
    id!: number;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    report?: InstanceType<typeof Report>;
    @Field(() => Int, {nullable:false})
    reportId!: number;
    @HideField()
    media?: InstanceType<typeof Media>;
    @Field(() => Int, {nullable:false})
    mediaId!: number;
}

@ArgsType()
export class UpdateManyReportMediaArgs {
    @Field(() => ReportMediaUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateManyMutationInput>;
    @Field(() => ReportMediaWhereInput, {nullable:true})
    where?: InstanceType<typeof ReportMediaWhereInput>;
}

@ArgsType()
export class UpdateOneReportMediaArgs {
    @Field(() => ReportMediaUpdateInput, {nullable:false})
    data!: InstanceType<typeof ReportMediaUpdateInput>;
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneReportMediaArgs {
    @Field(() => ReportMediaWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ReportMediaWhereUniqueInput>;
    @Field(() => ReportMediaCreateInput, {nullable:false})
    create!: InstanceType<typeof ReportMediaCreateInput>;
    @Field(() => ReportMediaUpdateInput, {nullable:false})
    update!: InstanceType<typeof ReportMediaUpdateInput>;
}

@ObjectType()
export class AggregateSocialAccount {
    @Field(() => SocialAccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SocialAccountCountAggregate>;
    @Field(() => SocialAccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SocialAccountAvgAggregate>;
    @Field(() => SocialAccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SocialAccountSumAggregate>;
    @Field(() => SocialAccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SocialAccountMinAggregate>;
    @Field(() => SocialAccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SocialAccountMaxAggregate>;
}

@ArgsType()
export class CreateManySocialAccountArgs {
    @Field(() => [SocialAccountCreateManyInput], {nullable:false})
    data!: Array<SocialAccountCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSocialAccountArgs {
    @Field(() => SocialAccountCreateInput, {nullable:false})
    data!: InstanceType<typeof SocialAccountCreateInput>;
}

@ArgsType()
export class DeleteManySocialAccountArgs {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
}

@ArgsType()
export class DeleteOneSocialAccountArgs {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSocialAccountArgs {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => [SocialAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithRelationInput>;
    @Field(() => SocialAccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SocialAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SocialAccountScalarFieldEnum>;
}

@ArgsType()
export class FindManySocialAccountArgs {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => [SocialAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithRelationInput>;
    @Field(() => SocialAccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SocialAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SocialAccountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSocialAccountArgs {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
}

@ArgsType()
export class SocialAccountAggregateArgs {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => [SocialAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithRelationInput>;
    @Field(() => SocialAccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SocialAccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SocialAccountCountAggregateInput>;
    @Field(() => SocialAccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SocialAccountAvgAggregateInput>;
    @Field(() => SocialAccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SocialAccountSumAggregateInput>;
    @Field(() => SocialAccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SocialAccountMinAggregateInput>;
    @Field(() => SocialAccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SocialAccountMaxAggregateInput>;
}

@InputType()
export class SocialAccountAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class SocialAccountAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    provider?: number;
    @Field(() => Float, {nullable:true})
    userId?: number;
}

@InputType()
export class SocialAccountAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SocialAccountCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    provider!: number;
    @Field(() => Int, {nullable:false})
    providerId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SocialAccountCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountCreateManyUserInputEnvelope {
    @Field(() => [SocialAccountCreateManyUserInput], {nullable:false})
    data!: Array<SocialAccountCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SocialAccountCreateManyUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountCreateNestedManyWithoutUserInput {
    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;
    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;
    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SocialAccountCreateManyUserInputEnvelope>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;
}

@InputType()
export class SocialAccountCreateOrConnectWithoutUserInput {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => SocialAccountCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof SocialAccountCreateWithoutUserInput>;
}

@InputType()
export class SocialAccountCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountCreateInput {
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSocialAccountInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSocialAccountInput>;
}

@ArgsType()
export class SocialAccountGroupByArgs {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => [SocialAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SocialAccountOrderByWithAggregationInput>;
    @Field(() => [SocialAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SocialAccountScalarFieldEnum>;
    @Field(() => SocialAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SocialAccountScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SocialAccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SocialAccountCountAggregateInput>;
    @Field(() => SocialAccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SocialAccountAvgAggregateInput>;
    @Field(() => SocialAccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SocialAccountSumAggregateInput>;
    @Field(() => SocialAccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SocialAccountMinAggregateInput>;
    @Field(() => SocialAccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SocialAccountMaxAggregateInput>;
}

@ObjectType()
export class SocialAccountGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => SocialAccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SocialAccountCountAggregate>;
    @Field(() => SocialAccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SocialAccountAvgAggregate>;
    @Field(() => SocialAccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SocialAccountSumAggregate>;
    @Field(() => SocialAccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SocialAccountMinAggregate>;
    @Field(() => SocialAccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SocialAccountMaxAggregate>;
}

@InputType()
export class SocialAccountListRelationFilter {
    @Field(() => SocialAccountWhereInput, {nullable:true})
    every?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => SocialAccountWhereInput, {nullable:true})
    some?: InstanceType<typeof SocialAccountWhereInput>;
    @Field(() => SocialAccountWhereInput, {nullable:true})
    none?: InstanceType<typeof SocialAccountWhereInput>;
}

@InputType()
export class SocialAccountMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SocialAccountMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    provider?: bigint | number;
    @Field(() => String, {nullable:true})
    providerId?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SocialAccountMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    provider?: bigint | number;
    @Field(() => String, {nullable:true})
    providerId?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SocialAccountCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SocialAccountCountOrderByAggregateInput>;
    @Field(() => SocialAccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SocialAccountAvgOrderByAggregateInput>;
    @Field(() => SocialAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SocialAccountMaxOrderByAggregateInput>;
    @Field(() => SocialAccountMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SocialAccountMinOrderByAggregateInput>;
    @Field(() => SocialAccountSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SocialAccountSumOrderByAggregateInput>;
}

@InputType()
export class SocialAccountOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountScalarWhereWithAggregatesInput {
    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SocialAccountScalarWhereWithAggregatesInput>;
    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SocialAccountScalarWhereWithAggregatesInput>;
    @Field(() => [SocialAccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SocialAccountScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    provider?: InstanceType<typeof BigIntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SocialAccountScalarWhereInput {
    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    AND?: Array<SocialAccountScalarWhereInput>;
    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    OR?: Array<SocialAccountScalarWhereInput>;
    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    NOT?: Array<SocialAccountScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    provider?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SocialAccountSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class SocialAccountSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    provider?: bigint | number;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class SocialAccountSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class SocialAccountUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;
    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;
    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SocialAccountCreateManyUserInputEnvelope>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;
}

@InputType()
export class SocialAccountUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    provider!: bigint | number;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SocialAccountUncheckedUpdateManyWithoutSocialAccountInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUncheckedUpdateManyWithoutUserInput {
    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;
    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;
    @Field(() => [SocialAccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<SocialAccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SocialAccountCreateManyUserInputEnvelope>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    set?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    disconnect?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    delete?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<SocialAccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SocialAccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<SocialAccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    deleteMany?: Array<SocialAccountScalarWhereInput>;
}

@InputType()
export class SocialAccountUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUpdateManyMutationInput {
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUpdateManyWithWhereWithoutUserInput {
    @Field(() => SocialAccountScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountScalarWhereInput>;
    @Field(() => SocialAccountUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SocialAccountUpdateManyMutationInput>;
}

@InputType()
export class SocialAccountUpdateManyWithoutUserInput {
    @Field(() => [SocialAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<SocialAccountCreateWithoutUserInput>;
    @Field(() => [SocialAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SocialAccountCreateOrConnectWithoutUserInput>;
    @Field(() => [SocialAccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<SocialAccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SocialAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SocialAccountCreateManyUserInputEnvelope>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    set?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    disconnect?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    delete?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountWhereUniqueInput], {nullable:true})
    connect?: Array<SocialAccountWhereUniqueInput>;
    @Field(() => [SocialAccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<SocialAccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SocialAccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<SocialAccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SocialAccountScalarWhereInput], {nullable:true})
    deleteMany?: Array<SocialAccountScalarWhereInput>;
}

@InputType()
export class SocialAccountUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => SocialAccountUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof SocialAccountUpdateWithoutUserInput>;
}

@InputType()
export class SocialAccountUpdateWithoutUserInput {
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SocialAccountUpdateInput {
    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof BigIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutSocialAccountInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSocialAccountInput>;
}

@InputType()
export class SocialAccountUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => SocialAccountUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof SocialAccountUpdateWithoutUserInput>;
    @Field(() => SocialAccountCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof SocialAccountCreateWithoutUserInput>;
}

@InputType()
export class SocialAccountWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class SocialAccountWhereInput {
    @Field(() => [SocialAccountWhereInput], {nullable:true})
    AND?: Array<SocialAccountWhereInput>;
    @Field(() => [SocialAccountWhereInput], {nullable:true})
    OR?: Array<SocialAccountWhereInput>;
    @Field(() => [SocialAccountWhereInput], {nullable:true})
    NOT?: Array<SocialAccountWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => BigIntFilter, {nullable:true})
    provider?: InstanceType<typeof BigIntFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class SocialAccount {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    provider!: bigint;
    @Field(() => String, {nullable:false})
    providerId!: string;
    @HideField()
    user?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
}

@ArgsType()
export class UpdateManySocialAccountArgs {
    @Field(() => SocialAccountUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SocialAccountUpdateManyMutationInput>;
    @Field(() => SocialAccountWhereInput, {nullable:true})
    where?: InstanceType<typeof SocialAccountWhereInput>;
}

@ArgsType()
export class UpdateOneSocialAccountArgs {
    @Field(() => SocialAccountUpdateInput, {nullable:false})
    data!: InstanceType<typeof SocialAccountUpdateInput>;
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSocialAccountArgs {
    @Field(() => SocialAccountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SocialAccountWhereUniqueInput>;
    @Field(() => SocialAccountCreateInput, {nullable:false})
    create!: InstanceType<typeof SocialAccountCreateInput>;
    @Field(() => SocialAccountUpdateInput, {nullable:false})
    update!: InstanceType<typeof SocialAccountUpdateInput>;
}

@ObjectType()
export class AggregateTag {
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TagAvgAggregate>;
    @Field(() => TagSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TagSumAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@ArgsType()
export class CreateManyTagArgs {
    @Field(() => [TagCreateManyInput], {nullable:false})
    data!: Array<TagCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTagArgs {
    @Field(() => TagCreateInput, {nullable:false})
    data!: InstanceType<typeof TagCreateInput>;
}

@ArgsType()
export class DeleteManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
}

@ArgsType()
export class DeleteOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
}

@ArgsType()
export class TagAggregateArgs {
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TagAvgAggregateInput>;
    @Field(() => TagSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TagSumAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@InputType()
export class TagAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TagAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class TagAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TagCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TagCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TagCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class TagCount {
    @Field(() => Int, {nullable:false})
    reports!: number;
}

@InputType()
export class TagCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TagCreateNestedManyWithoutReportsInput {
    @Field(() => [TagCreateWithoutReportsInput], {nullable:true})
    create?: Array<TagCreateWithoutReportsInput>;
    @Field(() => [TagCreateOrConnectWithoutReportsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutReportsInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;
}

@InputType()
export class TagCreateOrConnectWithoutReportsInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => TagCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof TagCreateWithoutReportsInput>;
}

@InputType()
export class TagCreateWithoutReportsInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TagCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportCreateNestedManyWithoutTagsInput, {nullable:true})
    reports?: InstanceType<typeof ReportCreateNestedManyWithoutTagsInput>;
}

@ArgsType()
export class TagGroupByArgs {
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithAggregationInput>;
    @Field(() => [TagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TagScalarFieldEnum>;
    @Field(() => TagScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TagScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TagAvgAggregateInput>;
    @Field(() => TagSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TagSumAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@ObjectType()
export class TagGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TagAvgAggregate>;
    @Field(() => TagSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TagSumAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@InputType()
export class TagListRelationFilter {
    @Field(() => TagWhereInput, {nullable:true})
    every?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    some?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    none?: InstanceType<typeof TagWhereInput>;
}

@InputType()
export class TagMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TagMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class TagMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TagMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TagMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class TagMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TagOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TagOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TagCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountOrderByAggregateInput>;
    @Field(() => TagAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TagAvgOrderByAggregateInput>;
    @Field(() => TagMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxOrderByAggregateInput>;
    @Field(() => TagMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinOrderByAggregateInput>;
    @Field(() => TagSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TagSumOrderByAggregateInput>;
}

@InputType()
export class TagOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: InstanceType<typeof ReportOrderByRelationAggregateInput>;
}

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class TagSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TagSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TagSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TagUncheckedCreateWithoutReportsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TagUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TagUncheckedUpdateManyWithoutTagsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateWithoutReportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateManyWithWhereWithoutReportsInput {
    @Field(() => TagScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof TagScalarWhereInput>;
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
}

@InputType()
export class TagUpdateManyWithoutReportsInput {
    @Field(() => [TagCreateWithoutReportsInput], {nullable:true})
    create?: Array<TagCreateWithoutReportsInput>;
    @Field(() => [TagCreateOrConnectWithoutReportsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutReportsInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutReportsInput], {nullable:true})
    upsert?: Array<TagUpsertWithWhereUniqueWithoutReportsInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    set?: Array<TagWhereUniqueInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    disconnect?: Array<TagWhereUniqueInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    delete?: Array<TagWhereUniqueInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutReportsInput], {nullable:true})
    update?: Array<TagUpdateWithWhereUniqueWithoutReportsInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutReportsInput], {nullable:true})
    updateMany?: Array<TagUpdateManyWithWhereWithoutReportsInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUpdateWithWhereUniqueWithoutReportsInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => TagUpdateWithoutReportsInput, {nullable:false})
    data!: InstanceType<typeof TagUpdateWithoutReportsInput>;
}

@InputType()
export class TagUpdateWithoutReportsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUpdateManyWithoutTagsInput, {nullable:true})
    reports?: InstanceType<typeof ReportUpdateManyWithoutTagsInput>;
}

@InputType()
export class TagUpsertWithWhereUniqueWithoutReportsInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => TagUpdateWithoutReportsInput, {nullable:false})
    update!: InstanceType<typeof TagUpdateWithoutReportsInput>;
    @Field(() => TagCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof TagCreateWithoutReportsInput>;
}

@InputType()
export class TagWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
}

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: InstanceType<typeof ReportListRelationFilter>;
}

@ObjectType()
export class Tag {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @HideField()
    createdAt!: Date;
    @HideField()
    updatedAt!: Date;
    @HideField()
    reports?: Array<Report>;
    @Field(() => TagCount, {nullable:false})
    _count?: InstanceType<typeof TagCount>;
}

@ArgsType()
export class UpdateManyTagArgs {
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
    @Field(() => TagWhereInput, {nullable:true})
    where?: InstanceType<typeof TagWhereInput>;
}

@ArgsType()
export class UpdateOneTagArgs {
    @Field(() => TagUpdateInput, {nullable:false})
    data!: InstanceType<typeof TagUpdateInput>;
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof TagWhereUniqueInput>;
    @Field(() => TagCreateInput, {nullable:false})
    create!: InstanceType<typeof TagCreateInput>;
    @Field(() => TagUpdateInput, {nullable:false})
    update!: InstanceType<typeof TagUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @HideField()
    createdAt!: number;
    @HideField()
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    SocialAccount!: number;
    @Field(() => Int, {nullable:false})
    reports!: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutReportsInput {
    @Field(() => UserCreateWithoutReportsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutReportsInput>;
    @Field(() => UserCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReportsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutSocialAccountInput {
    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutSocialAccountInput>;
    @Field(() => UserCreateOrConnectWithoutSocialAccountInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSocialAccountInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutReportsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutReportsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSocialAccountInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutSocialAccountInput>;
}

@InputType()
export class UserCreateWithoutReportsInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SocialAccountCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutSocialAccountInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SocialAccountCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountCreateNestedManyWithoutUserInput>;
    @Field(() => ReportCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @HideField()
    createdAt!: Date | string;
    @HideField()
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SocialAccountOrderByRelationAggregateInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountOrderByRelationAggregateInput>;
    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: InstanceType<typeof ReportOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutReportsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SocialAccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSocialAccountInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SocialAccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutReportsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SocialAccountUncheckedUpdateManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSocialAccountInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUncheckedUpdateManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SocialAccountUncheckedUpdateManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUncheckedUpdateManyWithoutUserInput>;
    @Field(() => ReportUncheckedUpdateManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSocialAccountInput {
    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutSocialAccountInput>;
    @Field(() => UserCreateOrConnectWithoutSocialAccountInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSocialAccountInput>;
    @Field(() => UserUpsertWithoutSocialAccountInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutSocialAccountInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutSocialAccountInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutSocialAccountInput>;
}

@InputType()
export class UserUpdateOneWithoutReportsInput {
    @Field(() => UserCreateWithoutReportsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutReportsInput>;
    @Field(() => UserCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReportsInput>;
    @Field(() => UserUpsertWithoutReportsInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutReportsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutReportsInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutReportsInput>;
}

@InputType()
export class UserUpdateWithoutReportsInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SocialAccountUpdateManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutSocialAccountInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ReportUpdateManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SocialAccountUpdateManyWithoutUserInput, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountUpdateManyWithoutUserInput>;
    @Field(() => ReportUpdateManyWithoutUserInput, {nullable:true})
    reports?: InstanceType<typeof ReportUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpsertWithoutReportsInput {
    @Field(() => UserUpdateWithoutReportsInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutReportsInput>;
    @Field(() => UserCreateWithoutReportsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutReportsInput>;
}

@InputType()
export class UserUpsertWithoutSocialAccountInput {
    @Field(() => UserUpdateWithoutSocialAccountInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutSocialAccountInput>;
    @Field(() => UserCreateWithoutSocialAccountInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutSocialAccountInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    username?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    password?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => SocialAccountListRelationFilter, {nullable:true})
    SocialAccount?: InstanceType<typeof SocialAccountListRelationFilter>;
    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: InstanceType<typeof ReportListRelationFilter>;
}

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
    _count?: InstanceType<typeof UserCount>;
}
