import { Media } from './media';
import { Tag } from './tag';

export type TaggedMedia = Media & {
  tags: Tag[];
};
