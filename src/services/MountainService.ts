import api from "./BaseService";

export const getMountainByName = async (mountain: string) => {
  const { data } = await api.get(`/images/${mountain}.png`);
  return data;
};

export const getMountainImageByName = async (mountain: string) => {
  return await api.get(`/api/arts/${mountain}`);
};

export const getMountainInfoByName = async (mountain: string) => {
  return await api.get(`/api/infos/${mountain}`);
};
