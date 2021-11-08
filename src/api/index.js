import request from '../utils/request';
export const fetchData = query => {
    return request({
        url: '/shuju',
        method: 'get',
        params: query
    });
};
export const Axiostu = que => {
    return request({
        url: '/nihao2',
        method: 'post',
        params: que
    });
};
