export type Media = {
  id: string;
  type: string;
  link: string;
  external_id: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  label: string;
  media_id: string;
  category_id: string;
};
