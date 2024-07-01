import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type WebsiteUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isCrisis?: BooleanNullableFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
