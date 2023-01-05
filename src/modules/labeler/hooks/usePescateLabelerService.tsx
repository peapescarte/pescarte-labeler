import axios from 'axios';
import { PescarteLabelerServiceHttp } from '../service/pescarte-labeler-service-http';

export function usePescarteLabelerService() {
  const axiosHttpClient = axios.create();
  return new PescarteLabelerServiceHttp(axiosHttpClient);
}
