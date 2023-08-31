import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GqlResponseError } from '../graphql/client';
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
  logout: () => void;
  auth: Auth | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

/**
 * Contexto de autenticação, é responsavel por disponibilizar funcionalidade relacionadas como login e logout.
 *
 */
export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [auth, setAuth] = useLocalStorage<Auth | null>('auth', null);
  const service = new PescarteService();
  const navigate = useNavigate();

  const login = async (cpf: string, password: string) => {
    const toastId = toast.loading('Buscando os dados...');

    try {
      const { user: userInfo, token } = await service.login(cpf, password);

      setUser(userInfo);
      setAuth({ token });
      navigate('/labeler/list');

      toast.update(toastId, {
        render: 'Login realizado com sucesso!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch (err) {
      const { response } = err as GqlResponseError;
      if (response && response.errors) {
        if (response.errors[0].status_code >= 400 && response.errors[0].status_code < 500) {
          toast.update(toastId, {
            render: 'CPF e Senha incorretos!',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
          });
        }
      } else {
        toast.update(toastId, {
          render: 'Ocorreu um erro, tente novamente!',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  };

  const logout = async () => {
    setAuth(null);
    setUser(null);
    window.location.replace('/login');
  };

  const values = useMemo(() => ({ user, auth, login, logout }), [user, auth, login, logout]);

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
