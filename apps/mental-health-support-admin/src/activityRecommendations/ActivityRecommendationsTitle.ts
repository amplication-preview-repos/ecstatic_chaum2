import { ActivityRecommendations as TActivityRecommendations } from "../api/activityRecommendations/ActivityRecommendations";

export const ACTIVITYRECOMMENDATIONS_TITLE_FIELD = "activityType";

export const ActivityRecommendationsTitle = (
  record: TActivityRecommendations
): string => {
  return record.activityType?.toString() || String(record.id);
};
