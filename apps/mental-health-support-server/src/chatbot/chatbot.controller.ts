import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatbotService } from "./chatbot.service";
import { ChatbotControllerBase } from "./base/chatbot.controller.base";

@swagger.ApiTags("chatbots")
@common.Controller("chatbots")
export class ChatbotController extends ChatbotControllerBase {
  constructor(protected readonly service: ChatbotService) {
    super(service);
  }
}
