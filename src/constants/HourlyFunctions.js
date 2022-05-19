export const retrieveSearchParams = (searchParams) => {
  const params = {
    name: searchParams.get("name"),
    lat: searchParams.get("lat"),
    lon: searchParams.get("lon"),
  };
  return params;
};
