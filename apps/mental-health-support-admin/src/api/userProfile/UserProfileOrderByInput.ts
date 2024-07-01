import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  address?: SortOrder;
  age?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
