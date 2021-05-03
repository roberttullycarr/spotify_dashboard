import config from 'config';
import humps from 'humps';
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: config.API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  transformRequest: [
    (data) => {
      if (!(data instanceof FormData)) {
        // convert all body keys to snake_case
        data = humps.decamelizeKeys(data);

        // convert all body objects to strings
        if (typeof data === 'object') {
          data = JSON.stringify(data);
        }
      }

      return data;
    },
  ],
  transformResponse: [
    (data) =>
      // convert all body keys to snake_case
      humps.camelizeKeys(JSON.parse(data)),
  ],
});

axiosApi.interceptors.request.use(
  (config) => {
    // Get accessToken
    const accessToken = '';

    // Set accessToken if authenticated
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.assign(config.API_BASE);
    }

    return Promise.reject(error);
  },
);

export default axiosApi;
