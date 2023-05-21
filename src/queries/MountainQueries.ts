import { useQuery } from "@tanstack/react-query";
import { getMountainByName } from "../services";

export const useGetMountainByName = (mountain: string, options = {}) =>
  useQuery(["mountainName", mountain], () => getMountainByName(mountain), {
    ...options,
  });
