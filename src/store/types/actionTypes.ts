import { IUser } from "../../interfaces/interfaces";
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
