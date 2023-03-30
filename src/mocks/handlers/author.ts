import { graphql } from 'msw';
import authors from '../fixtures/authors.json';

export const AuthorHandlers = [
  graphql.query('GetAuthors', (req, res, ctx) => {
    console.log(req);
    return res(ctx.delay(1000), ctx.data({ data: authors }));
  }),
];
