export const GET_MEDIAS = /* GraphQL */ `
  query GetMedias {
    listMidias {
      filename
      filedate
      id
      type
      link
      altText
      observation
      sensible
      author {
        id
        firstName
        middleName
        lastName
      }
      tags {
        label
        id
        categoria {
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
  mutation UpdateMedia($media: UpdateMidiaInput) {
    updateMidia(input: $media) {
      filename
      filedate
      id
      type
      link
      altText
      observation
      sensible
      author {
        id
        firstName
        middleName
        lastName
      }
      tags {
        label
        id
        categoria {
          id
          name
        }
      }
    }
  }
`;
