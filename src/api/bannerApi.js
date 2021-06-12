import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const bannerApi = {
  getAll: (params) => {
    const url = `${apiUrl}/banner`;
    return axiosClient.get(url, { params });
  },
  deleteById: (id) => {
    const url = `${apiUrl}/banner/${id}`;
    return axiosClient.delete(url);
  },
  create: (data, option) => {
    const url = `${apiUrl}/banner`;
    return axiosClient.post(url,data, option);
  },
  update : (data, option) => {
    const url = `${apiUrl}/banner`;
    return axiosClient.put(url,data, option);
  }
}

export default bannerApi;