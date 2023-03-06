import { setupWorker } from 'msw';
import { CategoryHandlers } from './handlers/category';
import { MediaHandlers } from './handlers/media';

export const worker = setupWorker(...CategoryHandlers, ...MediaHandlers);

export const startMSW = () => {
  if (process.env.REACT_APP_MODE === 'development' || process.env.NODE_ENV === 'development') {
    worker.start();
  }
};
