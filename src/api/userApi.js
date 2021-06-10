import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const userApi = {
  getAll: (params) => {
    let url = `${apiUrl}/user`;
    if(!!params) url = `${apiUrl}/user`
    // const url = `${apiUrl}/user`;
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `${apiUrl}/user/${id}`;
    return axiosClient.get(url);
  },
  getUser: (config) => {
    const url = `${apiUrl}/getUser`;
    return axiosClient.get(url,config)
  },
  createUser: (user) => {
    const url = `${apiUrl}/user/signup`
    return axiosClient.post(url, user)
  },
  deleteById: (id) => {
    const url = `${apiUrl}/user/signup`
    return axiosClient.delete(url)
  },
  login: (data) => {
    const url = `${apiUrl}/authenticate`
    return axiosClient.post(url, data)
  }
}

export default userApi;  