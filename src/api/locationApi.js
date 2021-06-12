import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const locationApi = {
  getAll: (params) => {
    const url = `${apiUrl}/location`;
    return axiosClient.get(url, { params });
  },
  deleteById: (id) => {
    const url = `${apiUrl}/location/${id}`;
    return axiosClient.delete(url);
  },
  create: (data) => {
    const url = `${apiUrl}/location`;
    return axiosClient.post(url,data);
  },
  update : (data) => {
    const url = `${apiUrl}/location`;
    return axiosClient.put(url,data);
  }
}

export default locationApi;