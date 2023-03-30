import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { User } from '../interfaces/user';
import { PescarteService } from '../service/pescarte-service';

interface AuthProviderProps {
  initialMediaId?: string;
  children: ReactNode;
}

interface Auth {
  token: string;
}

interface AuthContextProps {
  user: User | null;
  login: (cpf: string, password: string) => void;
  auth: Auth | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [auth, setAuth] = useLocalStorage<Auth | null>('auth', null);
  const service = new PescarteService();
  const navigate = useNavigate();

  const login = async (cpf: string, password: string) => {
    const { user: userInfo, token } = await service.login(cpf, password);
    setUser(userInfo);
    setAuth({ token });
    navigate('/labeler');
  };

  const values = useMemo(() => ({ user, auth, login }), [user, auth, login]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useContextAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useContextAuth must be used within a AuthProvider');
  }
  return context;
}

export default AuthContext;
