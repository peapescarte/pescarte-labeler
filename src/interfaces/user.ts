/**
 * Contrato de acesso, diz qual nivel de acesso de um usuário.
 */
export type roles = 'ADMIN' | 'AVULSO' | 'PESCADOR' | 'PESQUISADOR';

/**
 * Contrato do usuario, diz como será o objeto de usuário.
 */
export type User = {
  id: string;
  role: roles;
  firstName: string;
  lastName: string;
};
