import { createContext } from 'react';

interface IAuthContext {
  userInfo: UserInfo | null;
  login: (form: ILoginRequest) => void;
  logout: () => void;
  register: (form: IRegisterRequest) => void;
  getSmsCode: (mobile: string) => Promise<string>;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
