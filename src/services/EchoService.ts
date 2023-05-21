import api from "./BaseService";

export const getIFrameList = async () => {
  const { data } = await api.get("/api/echo");
  return data;
};

export const getIFrameListByName = async (name: string) => {
  const { data } = await api.get(`/api/echo/search/${name}`);
  return data;
};

export const getIFrameListByTopography = async (id: any) => {
  return await api.get(`/api/echo/topo/${id}`);
};
