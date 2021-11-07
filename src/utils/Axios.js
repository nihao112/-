import axios from "axios";
// import qs from "qs";
import {
    ElMessageBox
} from 'element-plus';

// axios.defaults.baseURL = ''  //正式
axios.defaults.baseURL = 'https://www.fastmock.site/mock/0e2a6412d08ccf81020a9bdecd3e69a7/nihao' //测试

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000; 	

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
			console.log(response.status);
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
		     	return Promise.reject(response);
        }
    },
    error => {
        ElMessageBox(JSON.stringify(error.message), '请求异常', {
            confirmButtonText: '确定',
            callback: action => {}
        });
    }
);
export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'post',
                    url,
                    // data:stringify(data),
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    },

    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'get',
                    url,
                    params: data,
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};
