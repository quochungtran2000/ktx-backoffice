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
  }
}

export default locationApi;