import { Module } from "@nestjs/common";
import { AuthentificationModuleBase } from "./base/authentification.module.base";
import { AuthentificationService } from "./authentification.service";
import { AuthentificationController } from "./authentification.controller";
import { AuthentificationResolver } from "./authentification.resolver";

@Module({
  imports: [AuthentificationModuleBase],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, AuthentificationResolver],
  exports: [AuthentificationService],
})
export class AuthentificationModule {}
