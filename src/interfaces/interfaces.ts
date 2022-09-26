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
  avatar: string;
  drawings: IDrawing[];
}

export interface IDrawing {
  id: string;
  name: string;
  description: string;
  image: string;
  artist: string;
  artistName: string;
  resolution: string;
  creationDate: string;
  likes: string[];
  dislikes: string[];
}

export interface IDrawingUser {
  id: string;
  name: string;
  description: string;
  image: string;
  artist: IUserVisible;
  artistName: string;
  resolution: string;
  creationDate: string;
  likes: [];
  dislikes: [];
}
