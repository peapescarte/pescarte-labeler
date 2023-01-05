import { rest } from 'msw';
import tagsData from '../fixtures/tags.json';
import medias from '../fixtures/medias.json';

export const MediaHandlers = [
  rest.get('/api/medias', (req, res, ctx) => {
    return res(ctx.json(medias));
  }),
  rest.get('/api/medias/:mediaId/tags', (req, res, ctx) => {
    const { mediaId } = req.params;
    const tags = tagsData.tags.filter((tag) => tag.media_id === mediaId);
    const data = { tags: tags };
    return res(ctx.json(data));
  }),
];
