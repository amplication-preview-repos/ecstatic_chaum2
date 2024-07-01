import { WebsiteUser as TWebsiteUser } from "../api/websiteUser/WebsiteUser";

export const WEBSITEUSER_TITLE_FIELD = "username";

export const WebsiteUserTitle = (record: TWebsiteUser): string => {
  return record.username?.toString() || String(record.id);
};
