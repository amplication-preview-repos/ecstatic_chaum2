import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActivityRecommendationsServiceBase } from "./base/activityRecommendations.service.base";

@Injectable()
export class ActivityRecommendationsService extends ActivityRecommendationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
