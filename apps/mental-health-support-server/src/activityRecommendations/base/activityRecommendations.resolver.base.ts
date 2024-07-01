/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ActivityRecommendations } from "./ActivityRecommendations";
import { ActivityRecommendationsCountArgs } from "./ActivityRecommendationsCountArgs";
import { ActivityRecommendationsFindManyArgs } from "./ActivityRecommendationsFindManyArgs";
import { ActivityRecommendationsFindUniqueArgs } from "./ActivityRecommendationsFindUniqueArgs";
import { CreateActivityRecommendationsArgs } from "./CreateActivityRecommendationsArgs";
import { UpdateActivityRecommendationsArgs } from "./UpdateActivityRecommendationsArgs";
import { DeleteActivityRecommendationsArgs } from "./DeleteActivityRecommendationsArgs";
import { ActivityRecommendationsService } from "../activityRecommendations.service";
@graphql.Resolver(() => ActivityRecommendations)
export class ActivityRecommendationsResolverBase {
  constructor(protected readonly service: ActivityRecommendationsService) {}

  async _activityRecommendationsItemsMeta(
    @graphql.Args() args: ActivityRecommendationsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ActivityRecommendations])
  async activityRecommendationsItems(
    @graphql.Args() args: ActivityRecommendationsFindManyArgs
  ): Promise<ActivityRecommendations[]> {
    return this.service.activityRecommendationsItems(args);
  }

  @graphql.Query(() => ActivityRecommendations, { nullable: true })
  async activityRecommendations(
    @graphql.Args() args: ActivityRecommendationsFindUniqueArgs
  ): Promise<ActivityRecommendations | null> {
    const result = await this.service.activityRecommendations(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ActivityRecommendations)
  async createActivityRecommendations(
    @graphql.Args() args: CreateActivityRecommendationsArgs
  ): Promise<ActivityRecommendations> {
    return await this.service.createActivityRecommendations({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ActivityRecommendations)
  async updateActivityRecommendations(
    @graphql.Args() args: UpdateActivityRecommendationsArgs
  ): Promise<ActivityRecommendations | null> {
    try {
      return await this.service.updateActivityRecommendations({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ActivityRecommendations)
  async deleteActivityRecommendations(
    @graphql.Args() args: DeleteActivityRecommendationsArgs
  ): Promise<ActivityRecommendations | null> {
    try {
      return await this.service.deleteActivityRecommendations(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}