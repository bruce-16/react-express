import {fetchPost} from './fetch';

export const registerUser = async (values, cb) => {
  const url = '/api/users/user';
  const result = await fetchPost(url, values);
  if(result && cb){ 
    cb(result)
  };
} 

export const userLogin = async (values, cb) => {
  const url = '/api/users/login';
  const result = await fetchPost(url, values);
  if(result && cb){ 
    cb(result)
  };
} 