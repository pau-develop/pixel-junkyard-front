import { IDrawing, IUser, IUserVisible } from "../../interfaces/interfaces";
import { IUIModal } from "./interfaces";

export interface Action {
  type: string;
}
export interface IUIAction extends Action {
  payload: IUIModal;
}

export interface IUserAction extends Action {
  payload: IUser;
}

export interface IUserVisibleAction extends Action {
  payload: IUserVisible[];
}

export interface IDrawingAction extends Action {
  payload: IDrawing[];
}
