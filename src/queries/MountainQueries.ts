import { useQuery } from "@tanstack/react-query";
import {
  getMountainByName,
  getMountainImageByName,
  getMountainInfoByName,
} from "../services";

export const useGetMountainByName = (mountain: string, options = {}) =>
  useQuery(["mountainName", mountain], () => getMountainByName(mountain), {
    ...options,
  });

export const useGetMountainImageByName = (mountain: string, options = {}) =>
  useQuery(
    ["mountainImageByName", mountain],
    () => getMountainImageByName(mountain),
    {
      ...options,
    }
  );

export const useGetMountainInfoByName = (mountain: string, options = {}) =>
  useQuery(["mountainInfo", mountain], () => getMountainInfoByName(mountain), {
    ...options,
  });
