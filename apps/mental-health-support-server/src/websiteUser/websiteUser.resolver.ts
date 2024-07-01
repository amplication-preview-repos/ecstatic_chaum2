import * as graphql from "@nestjs/graphql";
import { WebsiteUserResolverBase } from "./base/websiteUser.resolver.base";
import { WebsiteUser } from "./base/WebsiteUser";
import { WebsiteUserService } from "./websiteUser.service";

@graphql.Resolver(() => WebsiteUser)
export class WebsiteUserResolver extends WebsiteUserResolverBase {
  constructor(protected readonly service: WebsiteUserService) {
    super(service);
  }
}
