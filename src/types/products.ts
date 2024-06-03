export type TProduct = {
  productName: string;
  category: string;
  categorySlug: string;
  urlSlug: string;
  medida: string;
  precio: number;
  rating: number;
  imageCollection: {
    items: {
      title: string;
      url: string;
    }[];
  };
  sys: {
    id: string;
  };
};

export type TProductCollection = TProduct[];