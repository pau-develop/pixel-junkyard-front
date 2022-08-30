import { IUIModal } from "./interfaces";

export interface Action {
  type: string;
}
export interface IUIAction extends Action {
  payload: IUIModal;
}
