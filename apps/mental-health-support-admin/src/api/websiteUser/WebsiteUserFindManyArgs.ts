import { WebsiteUserWhereInput } from "./WebsiteUserWhereInput";
import { WebsiteUserOrderByInput } from "./WebsiteUserOrderByInput";

export type WebsiteUserFindManyArgs = {
  where?: WebsiteUserWhereInput;
  orderBy?: Array<WebsiteUserOrderByInput>;
  skip?: number;
  take?: number;
};
