import { useQuery } from "@tanstack/react-query";
import { getAnimalsByMountain } from "../services/AnimalsService";

export const useGetAnimalListByMoutain = (mountain: string, options = {}) =>
  useQuery(
    ["animalsListByMountain", mountain],
    () => getAnimalsByMountain(mountain),
    {
      ...options,
    }
  );
