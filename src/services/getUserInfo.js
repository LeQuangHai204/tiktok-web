import { rapidApi } from '~/utils';

export default function getUserInfo(
    params = {
        user_id: '7120607853731562498',
    }
) {
    return new Promise((resolve) => {
        resolve(require('~/assets/apis/info.json').data.data);
    });

    return rapidApi
        .get('/user/info', {
            params,
        })
        .then((response) => {
            // console.log('getUserInfo response:', response);
            return response.data.data;
        })
        .catch((error) => {
            console.log('getUserInfo error:', error);
            throw error;
        });
}
