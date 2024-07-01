import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthentificationServiceBase } from "./base/authentification.service.base";

@Injectable()
export class AuthentificationService extends AuthentificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
