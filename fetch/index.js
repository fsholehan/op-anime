import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = "api";

console.log(ROOT_API);

export const getListEps = async () => {
  const URL = "all";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse;
};
