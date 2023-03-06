import { graphql } from 'msw';
import categories from '../fixtures/categories.json';

export const CategoryHandlers = [
  graphql.query('GetCategories', (req, res, ctx) => {
    return res(ctx.data({ data: categories }));
  }),
];
