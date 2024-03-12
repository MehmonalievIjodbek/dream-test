export const generateSiteMap = (data: any, URL: string, page: string) => {
  return data?.map(({ id }: any) => ({
    url: `${URL}/${page}/${id}`,
    lastModified: new Date(),
  }));
};
