import { createContext } from 'react';

interface IAuthContext {
  userInfo: IUserInfo | null;
  refreshInfo: () => void;
  login: (form: ILoginRequest) => Promise<unknown>;
  register: (form: IRegisterRequest) => Promise<unknown>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
