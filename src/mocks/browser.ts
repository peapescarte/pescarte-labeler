import { setupWorker } from 'msw';
import { categoryHandlers } from './handlers/category-handlers';

export const worker = setupWorker(...categoryHandlers);

export const startMSW = () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }
};
