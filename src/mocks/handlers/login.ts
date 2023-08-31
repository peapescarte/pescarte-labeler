import { graphql } from 'msw';

export const LoginHandlers = [
  graphql.mutation('Login', (req, res, ctx) => {
    const { cpf, password } = req.variables;

    return res(
      ctx.data({
        login: {
          token: 'SFMyNTY.g2gDYQVuBgAHb5dAAFRgA.NIfpkpElqBz-F7Vcg906WjVDb8KgNOKZRSs37BoHcKk',
        },
      }),
    );
  }),
];
