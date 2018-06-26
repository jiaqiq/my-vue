
import axios from 'axios';
const $http = axios;

export default {
  /**查询单个用户 */
  queryUser(param) {
    return new Promise((resolve, reject) => {
      let url = "/api/users/selectUserById";
      $http.post(url, param).then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  /**新增用户 */
  addUser(param) {
    return new Promise((resolve, reject) => {
        let url = "/api/users/addUser";
        $http.get(url, param).then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })

    })
  },
  /**更新用户 */
  updateUser(param) {
      return new Promise((resolve, reject) => {
          let url = "/api/users/updateUser";
          $http.post(url, param).then(res => {
              resolve(res);
          })
          .catch(err => {
              reject(err);
          })
      })
  },
  /**删除用户 */
  deleteUser(param) {
      return new Promise((resolve, reject) => {
          let url = "/api/users/delUser";
          $http.post(url, param).then(res => {
              resolve(res);
          })
          .catch(err => {
              reject(err);
          })
      })
  },
  /**简易登录 */
  login(param) {
      return new Promise((resolve, reject) => {
          let url = "/api/users/login";
          $http.post(url, param).then(res => {
              resolve(res);
          })
          .catch(err => {
              reject(err);
          })
      })
  },
   /**加载图片 */
   loadImgs(param) {
    return new Promise((resolve, reject) => {
        let url = "/api/users/loadImgs";
        $http.post(url, param).then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
  }
}
