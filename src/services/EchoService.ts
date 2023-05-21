import api from "./BaseService";

export const getIFrameList = async () => {
  return await api.get("/api/echo");
};

export const getIFrameListByName = async (name: string) => {
  return await api.get(`/api/echo/search/:${name}`);
};

export const getIFrameListByTopography = async (id: any) => {
  return await api.get(`/api/echo/topo/:${id}`);
};
