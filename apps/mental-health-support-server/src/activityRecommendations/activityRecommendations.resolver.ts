import * as graphql from "@nestjs/graphql";
import { ActivityRecommendationsResolverBase } from "./base/activityRecommendations.resolver.base";
import { ActivityRecommendations } from "./base/ActivityRecommendations";
import { ActivityRecommendationsService } from "./activityRecommendations.service";

@graphql.Resolver(() => ActivityRecommendations)
export class ActivityRecommendationsResolver extends ActivityRecommendationsResolverBase {
  constructor(protected readonly service: ActivityRecommendationsService) {
    super(service);
  }
}
