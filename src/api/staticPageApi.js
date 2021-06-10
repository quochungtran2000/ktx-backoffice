import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const staticPageApi = {
  getAll: (params) => {
    const url = `${apiUrl}/staticpage`;
    return axiosClient.get(url,  params );
  },
  deleteById: (id) => {
    const url = `${apiUrl}/location/${id}`;
    return axiosClient.delete(url);
  },
  createStaticPage: (data, config) => {
    const url = `${apiUrl}/staticpage`;
    return axiosClient.post(url, data, config );
  }
}

export default staticPageApi;