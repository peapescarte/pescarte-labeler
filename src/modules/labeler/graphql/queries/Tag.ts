/**
 * Interface backend de uma tag
 *
 */
export type TagPayload = {
  etiqueta: string;
  categoriaId: string;
};

/**
 * Estrutura de chamada Graphql para criar uma nova tag
 *
 */
export const CREATE_TAG = /* GraphQL */ `
  mutation CreateTag($label: String!, $categoriaId: String!) {
    criarTag(input: { etiqueta: $label, categoriaId: $categoriaId }) {
      id
      etiqueta
    }
  }
`;

export type CREATE_TAG_RESPONSE = {
  id: string;
  etiqueta: string;
};

/**
 * Estrutura de chamada Graphql para criar um conjunto de tag
 *
 */
export const CREATE_TAGS = /* GraphQL */ `
  mutation CreateTags($tags: [CriarTagInput]) {
    criarTags(input: $tags) {
      id
      etiqueta
      categoria {
        id
      }
    }
  }
`;

export type CREATE_TAGS_RESPONSE = {
  id: string;
  etiqueta: string;
  categoria: {
    id: string;
  };
};

/**
 * Estrutura de chamada Graphql para remover um conjunto de tag
 *
 */
export const REMOVE_TAGS = /* GraphQL */ `
  mutation RemoveTags($removedTags: RemoveTagInput) {
    removeMidiaTags(input: $removedTags) {
      id
      etiqueta
    }
  }
`;

export type RemoveTagsPayload = {
  midiaId: string;
  tagsId: string[];
};

export type REMOVE_TAGS_RESPONSE = {
  id: string;
  etiqueta: string;
};

/**
 * Estrutura de chamada Graphql para buscar todas tags
 *
 */
export const GET_TAGS = /* GraphQL */ `
  query GetTags {
    listarTags {
      id
      etiqueta
      categoria {
        id
      }
    }
  }
`;
