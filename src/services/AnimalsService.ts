import api from "./BaseService";

export const getAnimalsByMountain = async (mountain: string) => {
  const { data } = await api.get(`/api/animals/${mountain}/info`);
  return data;
};
