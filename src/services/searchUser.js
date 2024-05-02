import { f8Api, rapidApi } from '~/utils';

export default async function searchUser(params) {
    try {
        const response = await f8Api.request({
            method: 'GET',
            url: '/users/search',
            params,
        });
        return response.data.data;
    } catch (error) {
        setTimeout(() => {
            return require('~/assets/apis/users.json');
        }, 1000);
    }
}
