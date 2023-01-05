import { rest } from 'msw';
import categories from '../fixtures/categories.json';

export const CategoryHandlers = [
  rest.get('/api/categories', (req, res, ctx) => {
    return res(ctx.json(categories));
  }),
];
