import axios from 'axios';
import { getItem, removeItem, setItem } from '../utils/localstorage';

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const onAccessTokenFetched = (access_token) => {
  subscribers = subscribers.filter((callback) =>
    callback(access_token),
  );
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

const refreshToken = async ()=> {
  const RToken = getItem('refreshToken');
  const response = await api.post(
    'sessions/refresh',
    {
      refreshToken: RToken,
    },
  );
  setItem('token', response.data.token);
  setItem('refreshToken', response.data.refreshToken);

  api.defaults.headers.authorization = `Bearer ${response.data.token}`;

  return Promise.resolve(response.data.token);
};

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response === undefined) return Promise.reject();
    const {
      config,
      response: { status, data },
    } = error;

    const originalRequest = config;

    if (status === 401 && data.message === 'Expired_JWT_token') {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;
        refreshToken().then(access_token => {
          isAlreadyFetchingAccessToken = false;
          onAccessTokenFetched(access_token);
        });
      }

      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber((access_token) => {
          originalRequest.headers.authorization = `Bearer ${access_token}`;

          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    if (status === 401 && data.message === 'Expired_JWT_Refresh_token') {
      api.defaults.headers.authorization = ``;
      removeItem('token');
      removeItem('refreshToken');
      removeItem('user');
      window.location.reload();
    }
    if (status === 401 && data.message === 'Invalid_JWT_token') {
      api.defaults.headers.authorization = ``;
      removeItem('token');
      removeItem('refreshToken');
      removeItem('user');
      window.location.reload();
    }
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error === undefined || !error.response || !error.status) {
      // console.log('Please check your internet connection.');
    }
    return Promise.reject(error);
  },
);

export default api;
