import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebsiteUserService } from "./websiteUser.service";
import { WebsiteUserControllerBase } from "./base/websiteUser.controller.base";

@swagger.ApiTags("websiteUsers")
@common.Controller("websiteUsers")
export class WebsiteUserController extends WebsiteUserControllerBase {
  constructor(protected readonly service: WebsiteUserService) {
    super(service);
  }
}
