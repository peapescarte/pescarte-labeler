import { Axios } from 'axios';
import { Category } from '../modules/labeler/interfaces/media';

export class PescarteLabelerServiceHttp {
  private _baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

  constructor(private _httpClient: Axios) {}

  async getCategories(): Promise<Category[]> {
    const url = `${String(this._baseUrl)}/categories`;
    const { data } = await this._httpClient.get(url);
    return data.categories;
  }
}
