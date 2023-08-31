export type MediaPayload = {
  nomeArquivo: string;
  dataArquivo: string;
  id: string;
  link: string;
  textoAlternativo: string;
  observacao: string;
  tipo: string;
  restrito: boolean;
  autorId: string;
};

export type addMediaTagsPayload = {
  midiaId: string;
  tagsId: string[];
};

/**
 * Estrutura de chamada Graphql para buscar midia por id
 *
 */
export const GET_MEDIA = /* GraphQL */ `
  query GetMedia($id: String!) {
    buscarMidia(id: $id) {
      id
      nomeArquivo
      dataArquivo
      tipo
      link
      textoAlternativo
      observacao
      restrito
      tags {
        id
        etiqueta
        categoria {
          id
          nome
        }
      }
      autor {
        id
        primeiroNome
        sobrenome
      }
    }
  }
`;

export type GET_MEDIA_RESPONSE = {
  id: string;
  nomeArquivo: string;
  dataArquivo: string;
  tipo: string;
  link: string;
  textoAlternativo: string;
  observacao: string;
  restrito: boolean;
  tags: {
    id: string;
    etiqueta: string;
    categoria: {
      id: string;
      nome: string;
    };
  }[];
  autor: {
    id: string;
    primeiroNome: string;
    sobrenome: string;
  };
};

/**
 * Estrutura de chamada Graphql para busca de todas midias
 *
 */
export const GET_MEDIAS = /* GraphQL */ `
  query GetMedias {
    listarMidias {
      id
      nomeArquivo
      dataArquivo
      tipo
      link
      textoAlternativo
      observacao
      restrito
      tags {
        id
        etiqueta
        categoria {
          id
          nome
        }
      }
      autor {
        id
        primeiroNome
        sobrenome
      }
    }
  }
`;

export type GET_MEDIAS_RESPONSE = {
  id: string;
  nomeArquivo: string;
  dataArquivo: string;
  tipo: string;
  link: string;
  textoAlternativo: string;
  observacao: string;
  restrito: boolean;
  tags: {
    id: string;
    etiqueta: string;
    categoria: {
      id: string;
      nome: string;
    };
  }[];
  autor: {
    id: string;
    primeiroNome: string;
    sobrenome: string;
  };
};

/**
 * Estrutura de chamada Graphql para criar uma nova midia
 *
 */
export const CREATE_MEDIA = /* GraphQL */ `
  mutation {
    midia(filename, filedate, link, type, observation, alt_text, tags) {
      id
    }
  }
`;

/**
 * Estrutura de chamada Graphql para atualizar uma midia
 *
 */
export const UPDATE_MEDIA = /* GraphQL */ `
  mutation UpdateMedia($media: AtualizarMidiaInput) {
    atualizarMidia(input: $media) {
      id
      nomeArquivo
      dataArquivo
      tipo
      link
      textoAlternativo
      observacao
      restrito
      tags {
        id
        etiqueta
        categoria {
          id
          nome
        }
      }
      autor {
        id
        primeiroNome
        sobrenome
      }
    }
  }
`;

export type UPDATE_MEDIA_RESPONSE = {
  id: string;
  nomeArquivo: string;
  dataArquivo: string;
  tipo: string;
  link: string;
  textoAlternativo: string;
  observacao: string;
  restrito: boolean;
  tags: {
    id: string;
    etiqueta: string;
    categoria: {
      id: string;
      nome: string;
    };
  }[];
  autor: {
    id: string;
    primeiroNome: string;
    sobrenome: string;
  };
};

/**
 * Estrutura de chamada Graphql para adicionar tags a uma midia
 *
 */
export const ADD_MEDIA_TAGS = /* GraphQL */ `
  mutation AddMediaTags($addTagsPayload: AdicionaTagInput) {
    adicionaMidiaTags(input: $addTagsPayload) {
      id
      etiqueta
      categoria {
        id
      }
    }
  }
`;
