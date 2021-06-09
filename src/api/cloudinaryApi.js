import {  imageUrl } from '../assets/consts/variables'
import axios from 'axios';

const cloudinaryApi = {
  upload: (formData) => {
    return axios.post(imageUrl, formData, {
      headers:{
            'Content-Type':'multipart/form-data'
          }
    });
  }
}

export default cloudinaryApi;