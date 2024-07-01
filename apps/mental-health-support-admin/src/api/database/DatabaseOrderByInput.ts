import { SortOrder } from "../../util/SortOrder";

export type DatabaseOrderByInput = {
  connectionString?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
