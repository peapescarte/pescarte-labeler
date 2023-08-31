import getGraphQLClient from '../../../graphql/client';
import GET_AUTHORS from '../graphql/queries/Author';
import GET_CATEGORIES from '../graphql/queries/Category';
import {
  ADD_MEDIA_TAGS,
  GET_MEDIA,
  GET_MEDIAS,
  GET_MEDIAS_RESPONSE,
  MediaPayload,
  UPDATE_MEDIA,
  addMediaTagsPayload,
} from '../graphql/queries/Media';
import {
  CREATE_TAG,
  CREATE_TAGS,
  CREATE_TAGS_RESPONSE,
  GET_TAGS,
  REMOVE_TAGS,
  REMOVE_TAGS_RESPONSE,
  RemoveTagsPayload,
  TagPayload,
} from '../graphql/queries/Tag';
import { Category, Media, Tag } from '../interfaces';
import { Author } from '../interfaces/author';
import { convertResponseToMediaObj } from './helpers';

/**
 * Service para rotinas que envolvem o labeler.
 * Utilizada para realizar busca de dados das midias e atualizar/remover suas informações
 */
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
    const { listarCategorias } = await this._client.request(GET_CATEGORIES);
    return listarCategorias.map((category: { id: string; nome: string }) => ({
      id: category.id,
      name: category.nome,
    }));
  }

  async getMedia(id: string): Promise<Media> {
    const { buscarMidia } = await this._client.request(GET_MEDIA, { id });

    return convertResponseToMediaObj(buscarMidia);
  }

  async getMedias(): Promise<Media[]> {
    const { listarMidias } = await this._client.request(GET_MEDIAS);

    return listarMidias.map((media: GET_MEDIAS_RESPONSE) => convertResponseToMediaObj(media));
  }

  async getAuthors(): Promise<Author[]> {
    const { listarUsuarios } = await this._client.request(GET_AUTHORS);

    return listarUsuarios.map(
      (author: { id: string; primeiroNome: string; sobrenome: string }) => ({
        id: author.id,
        firstName: author.primeiroNome,
        lastName: author.sobrenome,
      }),
    );
  }

  async getTags(): Promise<Tag[]> {
    const { listarTags } = await this._client.request(GET_TAGS);

    return listarTags.map((tag: { id: string; etiqueta: string; categoria: { id: string } }) => ({
      id: tag.id,
      label: tag.etiqueta,
      categoria: tag.categoria,
    }));
  }

  async updateMedia(media: MediaPayload): Promise<Media> {
    const { atualizarMidia } = await this._client.request(UPDATE_MEDIA, { media });

    return convertResponseToMediaObj(atualizarMidia);
  }

  async addMediaTags(addTagsPayload: addMediaTagsPayload) {
    this._client.request(ADD_MEDIA_TAGS, { addTagsPayload });
  }

  async createTag(tag: Tag): Promise<Tag> {
    const data = await this._client.request(CREATE_TAG, tag);

    return data;
  }

  async createTags(tags: TagPayload[]): Promise<Tag[]> {
    const { criarTags } = await this._client.request(CREATE_TAGS, { tags });

    return criarTags.map((newTag: CREATE_TAGS_RESPONSE) => ({
      id: newTag.id,
      label: newTag.etiqueta,
      categoryId: newTag.categoria.id,
    }));
  }

  async removeTags(removedTags: RemoveTagsPayload): Promise<REMOVE_TAGS_RESPONSE[]> {
    const { removeMidiaTags } = await this._client.request(REMOVE_TAGS, { removedTags });

    return removeMidiaTags;
  }
}
