/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-04-14 09:05:03
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-04-14 09:26:40
 * @FilePath: /笔试题/20230414/02.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 客户端

// get请求
function get(url, config) {
  const options = {
    ...config,
    method: "GET",
  };
  return fetch(url, options);
}

// post请求
function post(url, data, config) {
  const options = {
    ...config,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(url, options);
}

const axios = new Proxy(
  {},
  {
    get: (target, property) => {
      if (property === "get") return get;
      if (property === "post") return post;
      throw new Error(`Axios does not support the method "${prop}".`);
    },
  }
);

console.log(axios?.a);
