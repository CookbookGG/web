import qs from 'qs';
import axiosLib from 'axios';
import { ENV } from '../constants/constants';
import { useStore } from '../store/store';

const user = useStore.getState().user;
export const axios = axiosLib.create({
  baseURL: ENV.API_URL,
  timeout: 300000,
  ...(user && { headers: { Authorization: `Bearer ${user.token}` } }),
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (err) {
    // Do something with the response error
    return Promise.reject(err);
  }
);

class HttpService {
  async get(route, params?) {
    console.log(route);
    console.log(params);
    const res = await axios.get(route, {
      params,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return res.data;
  }

  async update(route, id, params?) {
    const res = await axios.patch(route + '/' + id, params);
    return res.data;
  }

  async getById(route, id) {
    console.log(route);
    console.log(id);
    const res = await axios.get(route + '/' + id);
    return res.data;
  }

  async delete(route, id) {
    return await axios.delete(route + '/' + id);
  }

  async create(route, params) {
    const res = await axios.post(route, params);
    return res.data;
  }
}

export default new HttpService();
