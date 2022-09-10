export interface Input {
  userName: string;
  password: string;
  email: string;
}

export interface IUser {
  id: string;
  userName: string;
  token: string;
}

export interface IUserVisible {
  id: string;
  userName: string;
  password: string;
  email: string;
  drawings: IDrawing[];
}

export interface IDrawing {
  id: string;
  name: string;
  description: string;
  image: string;
  artist: string;
  resolution: string;
  creationDate: string;
}
