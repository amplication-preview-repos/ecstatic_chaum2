import { SortOrder } from "../../util/SortOrder";

export type ChatbotOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
