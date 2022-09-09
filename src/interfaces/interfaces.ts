export interface Input {
  userName: string;
  password: string;
  email: string;
}

export interface IUser {
  _id: string;
  userName: string;
  token: string;
}

export interface IUserVisible {
  _id: string;
  userName: string;
  password: string;
  email: string;
  drawings: IDrawing[];
}

export interface IDrawing {
  _id: string;
  name: string;
  description: string;
  image: string;
  artist: string;
  resolution: string;
  creationDate: string;
}
