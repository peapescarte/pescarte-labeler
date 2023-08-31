export type Tag = {
  id: string;
  label: string;
  categoryId: string;
};

export type UpdateTag = Tag & {
  status: 'removed' | 'created';
};
