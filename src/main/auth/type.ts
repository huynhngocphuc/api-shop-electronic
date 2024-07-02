import { TableFieldName } from "./models";
type TRegisterReq = {
  [TableFieldName.UserName]: string;
  [TableFieldName.Password]: string;
  [TableFieldName.Email]: string;
};

type TRegisterRes = {
  token: string;
};

type TLoginReq = {
  [TableFieldName.UserName]: string;
  [TableFieldName.Password]: string;
};

type TLoginRes = {
  token: string;
};

export { TLoginReq, TLoginRes, TRegisterReq, TRegisterRes };
