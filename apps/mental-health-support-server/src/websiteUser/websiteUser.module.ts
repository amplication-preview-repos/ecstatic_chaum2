import { Module } from "@nestjs/common";
import { WebsiteUserModuleBase } from "./base/websiteUser.module.base";
import { WebsiteUserService } from "./websiteUser.service";
import { WebsiteUserController } from "./websiteUser.controller";
import { WebsiteUserResolver } from "./websiteUser.resolver";

@Module({
  imports: [WebsiteUserModuleBase],
  controllers: [WebsiteUserController],
  providers: [WebsiteUserService, WebsiteUserResolver],
  exports: [WebsiteUserService],
})
export class WebsiteUserModule {}
