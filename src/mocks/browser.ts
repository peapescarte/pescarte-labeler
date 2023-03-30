import { setupWorker } from 'msw';
import { AuthorHandlers } from './handlers/author';
import { CategoryHandlers } from './handlers/category';
import { LoginHandlers } from './handlers/login';
import { MediaHandlers } from './handlers/media';
import { TagHandlers } from './handlers/tag';

export const worker = setupWorker(
  ...CategoryHandlers,
  ...MediaHandlers,
  ...LoginHandlers,
  ...TagHandlers,
  ...AuthorHandlers,
);

export const startMSW = () => {
  if (process.env.REACT_APP_MODE === 'development') {
    worker.start();
  }
};
