import * as graphql from "@nestjs/graphql";
import { AuthentificationResolverBase } from "./base/authentification.resolver.base";
import { Authentification } from "./base/Authentification";
import { AuthentificationService } from "./authentification.service";

@graphql.Resolver(() => Authentification)
export class AuthentificationResolver extends AuthentificationResolverBase {
  constructor(protected readonly service: AuthentificationService) {
    super(service);
  }
}
