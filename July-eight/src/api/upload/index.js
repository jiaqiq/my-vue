import axios from 'axios';
const $http = axios;
 
 export default {
     /** 查看文件*/
    files(param) {
        return new Promise((resolve, reject) => {
            let url = "/api/upload/files";
            $http.get(url, param).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })

        })
    },
    /** 下载文件*/
    filesDown(param) {
        return new Promise((resolve, reject) => {
            let url = "/api/upload/file";
            $http.get(url, param).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })

        })
    },
 }
