import { useQuery } from "@tanstack/react-query";
import { getRatingOfMountain } from "../services/RatingService";

export const useGetRatingOfMountain = (mountain: string, options = {}) =>
  useQuery(
    ["ratingListOfMountain", mountain],
    () => getRatingOfMountain(mountain),
    {
      ...options,
    }
  );
