export type roles = 'ADMIN' | 'AVULSO' | 'PESCADOR' | 'PESQUISADOR';

export type User = {
  id: string;
  role: roles;
  firstName: string;
  lastName: string;
  middleName: string;
};
