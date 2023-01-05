import { setupWorker } from 'msw';
import { CategoryHandlers } from './handlers/category-handlers';
import { MediaHandlers } from './handlers/media-handlers';

export const worker = setupWorker(...CategoryHandlers, ...MediaHandlers);

export const startMSW = () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }
};
