import { Tag } from './tag';
import { User } from './user';

export type Media = {
  filename: string;
  filedate: string;
  id: string;
  type: string;
  link: string;
  observation: string;
  tags: Tag[];
  author: User;
};
