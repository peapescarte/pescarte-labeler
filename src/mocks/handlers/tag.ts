import { graphql } from 'msw';

export const TagHandlers = [
  graphql.query('CreateTag', (req, res, ctx) => {
    console.log(req);
    return res(ctx.delay(1000), ctx.data({}));
  }),
];
