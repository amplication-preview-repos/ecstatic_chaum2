import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivityRecommendationsService } from "./activityRecommendations.service";
import { ActivityRecommendationsControllerBase } from "./base/activityRecommendations.controller.base";

@swagger.ApiTags("activityRecommendations")
@common.Controller("activityRecommendations")
export class ActivityRecommendationsController extends ActivityRecommendationsControllerBase {
  constructor(protected readonly service: ActivityRecommendationsService) {
    super(service);
  }
}
