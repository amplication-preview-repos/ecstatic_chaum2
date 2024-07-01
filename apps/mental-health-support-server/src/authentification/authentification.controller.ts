import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthentificationService } from "./authentification.service";
import { AuthentificationControllerBase } from "./base/authentification.controller.base";

@swagger.ApiTags("authentifications")
@common.Controller("authentifications")
export class AuthentificationController extends AuthentificationControllerBase {
  constructor(protected readonly service: AuthentificationService) {
    super(service);
  }
}
