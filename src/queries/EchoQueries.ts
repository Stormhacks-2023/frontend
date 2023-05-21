import { useQuery } from "@tanstack/react-query";
import {
  getIFrameList,
  getIFrameListByName,
  getIFrameListByTopography,
} from "../services/EchoService";

export const useGetIFrameList = (options = {}) =>
  useQuery(["iFrameList"], () => getIFrameList(), {
    ...options,
  });

export const useGetIFrameListByName = (name: string, options = {}) =>
  useQuery(["iFrameListName", name], () => getIFrameListByName(name), {
    ...options,
  });

export const useGetIFrameListByTopography = (id: any, options = {}) =>
  useQuery(
    ["iFrameListTopography", name],
    () => getIFrameListByTopography(id),
    {
      ...options,
    }
  );
