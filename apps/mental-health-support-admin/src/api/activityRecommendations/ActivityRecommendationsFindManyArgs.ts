import { ActivityRecommendationsWhereInput } from "./ActivityRecommendationsWhereInput";
import { ActivityRecommendationsOrderByInput } from "./ActivityRecommendationsOrderByInput";

export type ActivityRecommendationsFindManyArgs = {
  where?: ActivityRecommendationsWhereInput;
  orderBy?: Array<ActivityRecommendationsOrderByInput>;
  skip?: number;
  take?: number;
};
