

type TRegisterReq = {
  userName: string;
  passWord: string;
  email: string;
};

type TRegisterRes = {
  token: string;
};

type TLoginReq = {
  userName: string;
  passWord: string;
};

type TLoginRes = {
  token: string;
};

export { TLoginReq, TLoginRes, TRegisterReq, TRegisterRes };
