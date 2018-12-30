import axios from 'axios'

let localhost = 'http://127.0.0.1:8000';

export const category = function (id) {
  return axios.get(localhost.toString() + '/api/category/' + id + '/');
}
