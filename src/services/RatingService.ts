import api from "./BaseService";

export const getRatingOfMountain = async (mountain: string) => {
  const { data } = await api.get(`/api/ratings/${mountain}`);
  return data;
};
