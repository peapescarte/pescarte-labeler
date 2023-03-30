import { graphql } from 'msw';
import medias from '../fixtures/medias.json';

export const MediaHandlers = [
  graphql.query('GetMedias', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.data({ data: medias }));
  }),
  graphql.mutation('UpdateMedia', (req, res, ctx) => {
    const data = req.variables;

    return res(ctx.delay(1500), ctx.data(data));
  }),
];
