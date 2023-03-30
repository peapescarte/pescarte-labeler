export const CREATE_TAG = /* GraphQL */ `
  mutation CreateTag($label: String!, $categoriaId: String!) {
    createTag(label: $label, categoriaId: $categoriaId) {
      id
      label
    }
  }
`;

export const CREATE_TAGS = /* GraphQL */ `
  mutation CreateTags($tags: [CreateTagInput]) {
    createTags(input: $tags) {
      id
      label
      categoria {
        id
        name
      }
    }
  }
`;

export const REMOVE_TAGS = /* GraphQL */ `
  mutation RemoveTags($mediaId: String, $tags: [RemoveTagInput!]) {
    removeMidiaTags(midiaId: $mediaId, tags: $tags) {
      id
      label
    }
  }
`;

export const GET_TAGS = /* GraphQL */ `
  query GetTags {
    listTags {
      id
      label
      categoria {
        id
        name
      }
    }
  }
`;
