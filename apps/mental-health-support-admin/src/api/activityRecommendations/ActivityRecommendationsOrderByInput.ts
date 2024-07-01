import { SortOrder } from "../../util/SortOrder";

export type ActivityRecommendationsOrderByInput = {
  activityType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  updatedAt?: SortOrder;
};
