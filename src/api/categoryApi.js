import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const categoryApi = {
  getAll: (params) => {
    const url = `${apiUrl}/category`;
    return axiosClient.get(url, { params });
  },
  deleteById: (id) => {
    const url = `${apiUrl}/category/${id}`;
    return axiosClient.delete(url);
  },
  create: (data) => {
    const url = `${apiUrl}/category`;
    return axiosClient.post(url,data);
  },
  update : (data) => {
    const url = `${apiUrl}/category`;
    return axiosClient.put(url,data);
  }
}

export default categoryApi;