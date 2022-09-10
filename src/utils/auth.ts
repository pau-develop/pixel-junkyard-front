import jwt from "jwt-decode";

export const fetchToken = (token: string) => {
  const payloadToken: {
    userName: string;
    id: string;
  } = jwt(token);

  return {
    userName: payloadToken.userName,
    id: payloadToken.id,
    token: token,
  };
};
