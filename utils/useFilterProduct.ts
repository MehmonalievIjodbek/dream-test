interface IFilterProduct {
  categories: string;
  brand: string;
  search: string;
}

export const FilterProduct = (
  filter: IFilterProduct,
  sort: string | null,
  pageParam: any,
  lang: string
) => {
  let params = "";

  if (filter?.brand && filter.brand !== "all") {
    params += `&filters[brand][name][$eq]=` + filter?.brand;
  }

  if (filter?.categories && filter.categories !== "all") {
    params += `&filters[categories][name][$eq]=` + filter?.categories;
  }
  if (filter.search) {
    params += `&filters[name][$contains]=` + filter?.search;
  }

  if (sort) {
    params += "&" + sort;
  }

  if (pageParam) {
    params += "&pagination[page]=" + pageParam;
  }

  params += "&pagination[pageSize]=15" + "&locale=" + lang;

  return params ?? "";
};
