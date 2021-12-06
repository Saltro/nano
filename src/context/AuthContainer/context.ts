import { createContext } from 'react';

interface IAuthContext {
  userInfo: UserInfo | null;
  login: ({ username, password }: { username: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
