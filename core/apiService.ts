import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";

type RequestHeaders = RawAxiosRequestHeaders;
type RequestParams = Record<string, unknown> | URLSearchParams | undefined;
type RequestData = unknown;

const API_TOKEN =
  "bcb26e51c342ad65f32e56913193045ebe629572558269ff96826852c943d1c254e77fb2b24fae4fdfbeb6504ea36f6a2286f74168830e2774a76fc34ab5c6d29191fa28799dce2945f5ff08b88fbf31a79f93e8b02b8f8f6102559b04728c58fada1a64878d1e8a31df7c5d7e8ef34a397332097636b91c0245434ec47a81ed";

let token = API_TOKEN;

const formatAuthorizationHeader = (value?: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  return value.toLowerCase().startsWith("bearer ") ? value : `Bearer ${value}`;
};

const generateHeader = (userHeader: RequestHeaders = {}): RequestHeaders => {
  const authorization = formatAuthorizationHeader(token);

  return {
    ...(authorization ? { Authorization: authorization } : {}),
    ...userHeader,
  };
};

const generatePath = (path: string = ""): string => {
  return `http://46.62.246.5:1337${path}`;
};

const buildConfig = (
  headers: RequestHeaders = {},
  params?: RequestParams
): AxiosRequestConfig => ({
  headers: generateHeader(headers),
  params,
});

export const get = <T = unknown>(
  path: string,
  params?: RequestParams,
  header: RequestHeaders = {}
): Promise<AxiosResponse<T>> => {
  return axios.get<T>(generatePath(path), buildConfig(header, params));
};

export const post = <T = unknown>(
  path: string,
  data?: RequestData,
  header: RequestHeaders = {}
): Promise<AxiosResponse<T>> => {
  return axios.post<T>(generatePath(path), data, buildConfig(header));
};

export const put = <T = unknown>(
  path: string,
  data?: RequestData,
  header: RequestHeaders = {}
): Promise<AxiosResponse<T>> => {
  return axios.put<T>(generatePath(path), data, buildConfig(header));
};

export const deleteRequest = <T = unknown>(
  path: string,
  params?: RequestParams,
  headers: RequestHeaders = {}
): Promise<AxiosResponse<T>> => {
  return axios.delete<T>(generatePath(path), buildConfig(headers, params));
};

export const setToken = (t?: string): void => {
  token = t ?? token;
};

const apiService = {
  get,
  post,
  put,
  deleteRequest,
  setToken,
};

export default apiService;
