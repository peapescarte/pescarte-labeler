import { GET_MEDIAS_RESPONSE, MediaPayload } from '../graphql/queries/Media';
import { Media } from '../interfaces';

export const convertResponseToMediaObj = (media: GET_MEDIAS_RESPONSE): Media => {
  return {
    filename: media.nomeArquivo,
    filedate: media.dataArquivo,
    id: media.id,
    link: media.link,
    altText: media.textoAlternativo,
    observation: media.observacao,
    type: media.tipo,
    sensible: media.restrito,
    author: {
      id: media.autor.id,
      firstName: media.autor.primeiroNome,
      lastName: media.autor.sobrenome,
    },
    tags: media.tags.map((tag: { id: string; etiqueta: string; categoria: { id: string } }) => ({
      id: tag.id,
      label: tag.etiqueta,
      categoryId: tag.categoria.id,
    })),
  };
};

export const convertMediaObjToPayload = (media: Media): MediaPayload => {
  return {
    id: media.id,
    link: media.link,
    autorId: media.author.id,
    nomeArquivo: media.filename,
    dataArquivo: media.filedate,
    observacao: media.observation,
    restrito: media.sensible,
    textoAlternativo: media.altText,
    tipo: media.type,
  };
};
