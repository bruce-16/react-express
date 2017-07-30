/**
 * localstorage使用的封装
 */

export const getItem = (key) => {
  return window.localStorage.getItem(key);
}

export const setItem = (key, value) => {
  window.localStorage.setItem(key, value);
}

/**
 * localStorage key的维护
 */

export const USER = 'user_info'; //用户信息