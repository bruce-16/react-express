import {fetchPost} from './fetch';

export const addRecord = async (values, cb) => {
  const url = '/api/records/record';
  const result = await fetchPost(url, values);
  if(result && cb){ 
    cb(result)
  };
} 
