type ProductImageData = {
  attributes: {
    url: string;
  };
}[];

type ProductImage = {
  data: ProductImageData;
};

type ProductMeta = {
  name: string;
}[];

type PartnerLogo = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

type ProductAttribute = {
  createdAt: string;
  description: string;
  image: ProductImage;
  locale: string;
  meta_description: string;
  meta_keywords: ProductMeta;
  meta_title: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
  localizations: any;
};

export type Product = {
  id: number;
  attributes: ProductAttribute;
};

export type SingleProduct = {
  data: {
    id: number;
    attributes: ProductAttribute;
  };
  meta: {};
};

type BlogAttributes = {
  title: string;
  createdAt: string;
  description: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: ProductImage;
  localizations: any;
};

export type BlogType = {
  data: {
    id: number;
    attributes: BlogAttributes;
  };
  meta: {};
};

export type ContactPageType = {
  phone_number: string;
  email: string;
  address: string;
  long: number;
  lat: number;
  vk_link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Partner = {
  id: number;
  attributes: {
    name: string;
    logo: PartnerLogo;
  };
};

export type Data = {
  id: number;
  title: string;
  description: string;
};

export interface IproductInfo {
  title1: string;
  title2: string;
  data: Data[];
}

export type Category = {
  id: number;
  attributes: {
    name: string;
    locale: string;
  };
};

export type IHomeMainSection = {
  data: {
    phone_number: string;
    email: string;
    address: string;
    long: number;
    lat: number;
    vk_link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type IHomeStatistics = {
  statistics: {
    years_on_market: number;
    own_plantations: number;
    existing_contracts: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};
export interface Counters {
  id: number;
  attributes: {
    createdAt: string;
    existing_contracts: number;
    own_plantations: number;
    publishedAt: string;
    updatedAt: string;
    years_on_market: number;
  };
}

// "data": {
//   "id": 3,
//   "attributes": {
//   "title":
//   "description":
//   "createdAt":
//   "updatedAt":
//   "publishedAt":
//   "locale":
//   }
//   },
//   "meta": {}
