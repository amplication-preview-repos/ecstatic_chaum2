import { Module } from "@nestjs/common";
import { ChatbotModuleBase } from "./base/chatbot.module.base";
import { ChatbotService } from "./chatbot.service";
import { ChatbotController } from "./chatbot.controller";
import { ChatbotResolver } from "./chatbot.resolver";

@Module({
  imports: [ChatbotModuleBase],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotResolver],
  exports: [ChatbotService],
})
export class ChatbotModule {}
