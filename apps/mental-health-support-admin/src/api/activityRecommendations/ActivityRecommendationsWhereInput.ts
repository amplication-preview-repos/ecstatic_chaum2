import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityRecommendationsWhereInput = {
  activityType?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
};
