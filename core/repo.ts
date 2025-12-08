import { get as apiGet } from "./apiService";

const HOMEPAGEURL = `/api/homepage?populate[0]=blogs&populate[1]=blogs.coverImage&populate[2]=pdf`;

export const getHomePageApi = <T = unknown>() => apiGet<T>(HOMEPAGEURL);

const repo = {
  getHomePageApi,
};

export default repo;
