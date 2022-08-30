import { IUIModal } from "./interfaces";

export interface Action {
  type: string;
}
interface IUIAction extends Action {
  payload: IUIModal;
}

export interface IUIModalDisplay extends IUIAction {}

export interface IUIModalHide extends IUIAction {}
