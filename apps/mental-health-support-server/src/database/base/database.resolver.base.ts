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
import { Database } from "./Database";
import { DatabaseCountArgs } from "./DatabaseCountArgs";
import { DatabaseFindManyArgs } from "./DatabaseFindManyArgs";
import { DatabaseFindUniqueArgs } from "./DatabaseFindUniqueArgs";
import { CreateDatabaseArgs } from "./CreateDatabaseArgs";
import { UpdateDatabaseArgs } from "./UpdateDatabaseArgs";
import { DeleteDatabaseArgs } from "./DeleteDatabaseArgs";
import { DatabaseService } from "../database.service";
@graphql.Resolver(() => Database)
export class DatabaseResolverBase {
  constructor(protected readonly service: DatabaseService) {}

  async _databasesMeta(
    @graphql.Args() args: DatabaseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Database])
  async databases(
    @graphql.Args() args: DatabaseFindManyArgs
  ): Promise<Database[]> {
    return this.service.databases(args);
  }

  @graphql.Query(() => Database, { nullable: true })
  async database(
    @graphql.Args() args: DatabaseFindUniqueArgs
  ): Promise<Database | null> {
    const result = await this.service.database(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Database)
  async createDatabase(
    @graphql.Args() args: CreateDatabaseArgs
  ): Promise<Database> {
    return await this.service.createDatabase({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Database)
  async updateDatabase(
    @graphql.Args() args: UpdateDatabaseArgs
  ): Promise<Database | null> {
    try {
      return await this.service.updateDatabase({
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

  @graphql.Mutation(() => Database)
  async deleteDatabase(
    @graphql.Args() args: DeleteDatabaseArgs
  ): Promise<Database | null> {
    try {
      return await this.service.deleteDatabase(args);
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
