import { Media, Tag } from './media';

export type TagedMedia = Media & {
  tags: Tag[];
};
