import getGraphQLClient from '../../../graphql/client';
import GET_AUTHORS from '../graphql/queries/Author';
import GET_CATEGORIES from '../graphql/queries/Category';
import { GET_MEDIAS, UPDATE_MEDIA } from '../graphql/queries/Media';
import { CREATE_TAG, CREATE_TAGS, GET_TAGS } from '../graphql/queries/Tag';
import { Category, Media, Tag } from '../interfaces';
import { Author } from '../interfaces/author';
import { UpdateMedia } from '../interfaces/media';
import { UpdateTag } from '../interfaces/tag';

export class PescarteLabelerService {
  private _baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
  private _client = getGraphQLClient(this._baseUrl);

  constructor() {
    const storaged = window.localStorage.getItem('auth');
    if (storaged) {
      const auth = JSON.parse(storaged);
      this._client.setHeader('authorization', `Bearer ${auth.token}`);
    }
  }

  async getCategories(): Promise<Category[]> {
    const { listCategorias } = await this._client.request(GET_CATEGORIES);
    return listCategorias;
  }

  async getMedias(): Promise<Media[]> {
    const { listMidias } = await this._client.request(GET_MEDIAS);

    return listMidias;
  }

  async getAuthors(): Promise<Author[]> {
    const { listUsers } = await this._client.request(GET_AUTHORS);

    return listUsers;
  }

  async getTags(): Promise<Tag[]> {
    const { listTags } = await this._client.request(GET_TAGS);

    return listTags;
  }

  async updateMedia(media: UpdateMedia): Promise<Media> {
    const { updateMidia } = await this._client.request(UPDATE_MEDIA, { media });

    return updateMidia;
  }

  async createTag(tag: Tag): Promise<Tag> {
    const data = await this._client.request(CREATE_TAG, tag);

    return data;
  }

  async createTags(tags: UpdateTag[]): Promise<Tag[]> {
    const { createTags } = await this._client.request(CREATE_TAGS, { tags });

    return createTags;
  }
}
