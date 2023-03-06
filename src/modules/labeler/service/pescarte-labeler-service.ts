import getGraphQLClient from '../graphql/client';
import GET_CATEGORIES from '../graphql/queries/Category';
import { GET_MEDIAS, UPDATE_MEDIA } from '../graphql/queries/Media';
import { Category, Media } from '../interfaces';

export class PescarteLabelerService {
  private _baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
  private _client = getGraphQLClient('https://pescarte.fly.dev/api');

  async getCategories(): Promise<Category[]> {
    const { data } = await this._client.request(GET_CATEGORIES);
    return data.categories;
  }

  async getMedias(): Promise<Media[]> {
    const { data } = await this._client.request(GET_MEDIAS);

    return data.medias;
  }

  async updateMedia(media: Media): Promise<Media> {
    const data = await this._client.request(UPDATE_MEDIA, media);

    return data;
  }
}
