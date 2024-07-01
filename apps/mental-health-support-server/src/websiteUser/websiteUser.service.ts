import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteUserServiceBase } from "./base/websiteUser.service.base";

@Injectable()
export class WebsiteUserService extends WebsiteUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
