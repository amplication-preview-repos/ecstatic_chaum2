import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChatbotWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  question?: StringNullableFilter;
};
