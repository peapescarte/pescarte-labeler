import { rest } from 'msw';
import categories from '../fixtures/categories.json';

export const categoryHandlers = [
  rest.get('/api/categories', (req, res, ctx) => {
    return res(ctx.json(categories));
  }),
];
