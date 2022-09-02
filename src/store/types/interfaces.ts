export interface IUserRegisterData {
  userName: string;
  password: string;
  email: string;
}

export interface IUserLoginData {
  userName: string;
  password: string;
}

export interface IUIModal {
  isOpen: boolean;
  message: string;
  type: string;
}
