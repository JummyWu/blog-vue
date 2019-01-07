import axios from 'axios'

let localhost = 'http://127.0.0.1:8000';

// export const category =  function () {
//   return axios.get(localhost.toString() + '/api/category/');
// }
// 分类详情跟分类列表
export const category = function (id) {
  if(id){
    return axios.get(localhost.toString() + '/api/aricle/?' + 'category=' + id);
  }
  else {
    return axios.get(localhost.toString() + '/api/category/');
  }
};
//标签
export const tag = function (id) {
  if (id){
    return axios.get(localhost.toString() + '/api/aricle/?' + 'tag=' + id);
  }
  else {
    return axios.get(localhost.toString() + '/api/tag/');
  }
};
// 文章详情跟文章列表
export const article = function (aricle_id) {
  if(aricle_id){
    return axios.get(localhost.toString() + '/api/aricle/' + aricle_id + '/');
  }else {
    return axios.get(localhost.toString() + '/api/aricle/')
  }
};


