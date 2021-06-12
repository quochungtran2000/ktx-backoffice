import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const staticPageApi = {
  getAll: (params) => {
    const url = `${apiUrl}/staticpage`;
    return axiosClient.get(url,  params );
  },
  deleteById: (id,config) => {
    const url = `${apiUrl}/staticpage/${id}`;
    return axiosClient.delete(url, config);
  },
  createStaticPage: (data, config) => {
    const url = `${apiUrl}/staticpage`;
    return axiosClient.post(url, data, config );
  }
}

export default staticPageApi;