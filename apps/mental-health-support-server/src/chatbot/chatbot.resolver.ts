import * as graphql from "@nestjs/graphql";
import { ChatbotResolverBase } from "./base/chatbot.resolver.base";
import { Chatbot } from "./base/Chatbot";
import { ChatbotService } from "./chatbot.service";

@graphql.Resolver(() => Chatbot)
export class ChatbotResolver extends ChatbotResolverBase {
  constructor(protected readonly service: ChatbotService) {
    super(service);
  }
}
