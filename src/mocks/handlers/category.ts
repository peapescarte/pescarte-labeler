import { graphql } from 'msw';
import categories from '../fixtures/categories.json';

export const CategoryHandlers = [
  graphql.query('GetCategories', (req, res, ctx) => {
    return res(ctx.delay(500), ctx.data({ data: categories }));
  }),
];
