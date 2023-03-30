export type UpdateTag = {
  label: string;
  categoriaId: string;
};

export type Tag = {
  id: string;
  label: string;
  categoria: {
    id: string;
  };
};
