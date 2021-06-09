import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const postApi = {
  getAll: (params) => {
    let url = `${apiUrl}/post`;
    // if(!!params) url = `${apiUrl}/post?${params}`
    // const url = `${apiUrl}/post`;
    return axiosClient.get(url,{ params });
  },
  getById: (id) => {
    const url = `${apiUrl}/post/${id}`;
    return axiosClient.get(url);
  },
  getByUser: (params) => {
    const url = `${apiUrl}/post`;
    return axiosClient.get(url,{ params });
  },
  deleteById: (id) => {
    return axiosClient.delete(`${apiUrl}/post/${id}`)
  },
  createPost: (post) => {
    return axiosClient.post(`${apiUrl}/post`, post)
  }
}

export default postApi;