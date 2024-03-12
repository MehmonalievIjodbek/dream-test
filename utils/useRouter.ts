export const createQueryString = (brand: string, id: string) => {
  let searchParams = new URLSearchParams(window.location.search);

  searchParams.set(brand, id + "");

  return searchParams;
};

export const routerPush = (slug: string, id: string) => {
  window.history.pushState(
    {},
    "",
    window.location.pathname + "?" + createQueryString(slug, id)
  );
};

interface QueryParams {
  [key: string]: string | string[];
}

export const getQueryParams = (): QueryParams => {
  const queryString = window?.location?.search?.substring(1); // Remove the leading '?'
  const params: QueryParams = {};

  queryString.split("&").forEach((pair) => {
    const [key, value] = pair?.split("=");
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    // If the key already exists, make it an array and add the new value
    if (params.hasOwnProperty(decodedKey)) {
      if (Array.isArray(params[decodedKey])) {
        (params[decodedKey] as string[]).push(decodedValue);
      } else {
        // @ts-ignore
        params[decodedKey] = [params[decodedKey], decodedValue];
      }
    } else {
      params[decodedKey] = decodedValue;
    }
  });

  return params;
};
