import { AuthentificationWhereInput } from "./AuthentificationWhereInput";
import { AuthentificationOrderByInput } from "./AuthentificationOrderByInput";

export type AuthentificationFindManyArgs = {
  where?: AuthentificationWhereInput;
  orderBy?: Array<AuthentificationOrderByInput>;
  skip?: number;
  take?: number;
};
