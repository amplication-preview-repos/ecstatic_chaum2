import { Authentification as TAuthentification } from "../api/authentification/Authentification";

export const AUTHENTIFICATION_TITLE_FIELD = "username";

export const AuthentificationTitle = (record: TAuthentification): string => {
  return record.username?.toString() || String(record.id);
};
