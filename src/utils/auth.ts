import jwt from "jwt-decode";

export const fetchToken = (token: string) => {
  const payloadToken: {
    userName: string;
    _id: string;
  } = jwt(token);

  return {
    userName: payloadToken.userName,
    _id: payloadToken._id,
    token: token,
  };
};
