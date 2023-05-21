import api from "./BaseService";


function convertString(str: string): string {
  const lowerCaseStr = str.toLowerCase();
  const replacedStr = lowerCaseStr.replace(/\s+/g, '_');
  return replacedStr;
}

export const getAnimalsByMountain = async (mountain: string) => {
  const mountain_name = convertString(mountain)
  console.log("HEREEEEEEEEEEEEEEEEEEEEEE")
  const { data } = await api.get(`/api/animals/${mountain_name}/info`);
  return data;
};
