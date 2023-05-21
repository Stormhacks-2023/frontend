import api from "./BaseService";

export const getMountainByName = async (mountain: string) => {
  const { data } = await api.get(`/images/${mountain}.png`);
  return data;
};
