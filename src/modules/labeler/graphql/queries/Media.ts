export const GET_MEDIAS = /* GraphQL */ `
  query GetMedias {
    listMidias {
      filename
      filedate
      id
      type
      link
      observation
      author {
        firstName
        lastName
      }
      tags {
        label
        id
        category {
          id
          name
        }
      }
    }
  }
`;

export const CREATE_MEDIA = /* GraphQL */ `
  mutation {
    midia(filename, filedate, link, type, observation, alt_text, tags) {
      id
    }
  }
`;

export const UPDATE_MEDIA = /* GraphQL */ `
  mutation UpdateMedia($input: UpdateMidiaInput!) {
    updateMidia(input: $input) {
      filename
      filedate
      id
      type
      link
      observation
      author {
        firstName
        lastName
      }
      tags {
        label
        id
        category {
          id
          name
        }
      }
    }
  }
`;
