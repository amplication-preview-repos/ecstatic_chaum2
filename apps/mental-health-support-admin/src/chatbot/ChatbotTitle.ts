import { Chatbot as TChatbot } from "../api/chatbot/Chatbot";

export const CHATBOT_TITLE_FIELD = "id";

export const ChatbotTitle = (record: TChatbot): string => {
  return record.id?.toString() || String(record.id);
};
