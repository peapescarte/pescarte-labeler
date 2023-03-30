import { Author } from './author';
import { Tag } from './tag';

export type MediaType = 'DOCUMENTO' | 'IMAGEM' | 'VIDEO';

type MediaBase = {
  filename: string;
  filedate: string;
  id: string;
  link: string;
  altText: string;
  observation: string;
  type: string;
  sensible: boolean;
};

export type Media = MediaBase & {
  author: Author;
  tags: Tag[];
};

export type UpdateMedia = MediaBase & {
  authorId: string;
  tags: string[];
};
