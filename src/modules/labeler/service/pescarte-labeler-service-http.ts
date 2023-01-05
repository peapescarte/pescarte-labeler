import { Axios } from 'axios';
import { Category, Media, Tag } from '../interfaces';

export class PescarteLabelerServiceHttp {
  private _baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

  constructor(private _httpClient: Axios) {}

  async getCategories(): Promise<Category[]> {
    const url = `${String(this._baseUrl)}/categories`;
    const { data } = await this._httpClient.get(url);
    return data.categories;
  }

  async getMedias(): Promise<Media[]> {
    const url = `${String(this._baseUrl)}/medias`;
    const { data } = await this._httpClient.get(url);
    return data.medias;
  }

  async getMediaTags(id: string): Promise<Tag[]> {
    const url = `${String(this._baseUrl)}/medias/${id}/tags`;
    const { data } = await this._httpClient.get(url);
    return data.tags;
  }
}
