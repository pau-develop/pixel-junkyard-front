import jwt from "jwt-decode";

export const fetchToken = (token: string) => {
  const payloadToken: {
    userName: string;
  } = jwt(token);

  return {
    token: token,
    userName: payloadToken.userName,
  };
};
