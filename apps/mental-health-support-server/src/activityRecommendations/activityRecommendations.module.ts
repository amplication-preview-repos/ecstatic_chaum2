import { Module } from "@nestjs/common";
import { ActivityRecommendationsModuleBase } from "./base/activityRecommendations.module.base";
import { ActivityRecommendationsService } from "./activityRecommendations.service";
import { ActivityRecommendationsController } from "./activityRecommendations.controller";
import { ActivityRecommendationsResolver } from "./activityRecommendations.resolver";

@Module({
  imports: [ActivityRecommendationsModuleBase],
  controllers: [ActivityRecommendationsController],
  providers: [ActivityRecommendationsService, ActivityRecommendationsResolver],
  exports: [ActivityRecommendationsService],
})
export class ActivityRecommendationsModule {}
