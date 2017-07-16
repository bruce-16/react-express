//封装fetch get，post，put, delete操作。
import {message} from 'antd';

const GET = async url => {
  console.log(`[GET URL: ${url} ]`);
  try {
    let rst = await fetch(url, {
      //get参数
    });
    let json = await rst.json();
    return json;    
  } catch (error) {
    console.log(`[GET URL: ${url}, ERROR: ${error}]`);
    return false;
  }
}

const POST = async (url, body) => {
  console.log(`[POST URL: ${url} ]`);
  try {
    let rst = await fetch(url, {
      //post参数
      method: 'POST',
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(body)
    });
    let json = await rst.json();
    return json;    
  } catch (error) {
    console.log(`[GET URL: ${url}, ERROR: ${error}]`);
    return false;
  }
}

export const fetchPost = async (url, values) => {
  let result = await POST(url, values);
  if(!result.status && result.status > 0){
    let msg = result.msg || '提交信息失败';
    message.error(msg, 2);
  }else{
    return result;
  }
}

export const fetchGet = async url => {
  let result = await GET(url);
  if(result.status && result.status > 0){
    let msg = result.msg || '发送信息失败';
    message.error(msg, 2);
  }else{
    return result;
  }
}
