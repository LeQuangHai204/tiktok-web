import { rapidApi } from '~/utils';

export default async function fetchVideos(
    params = {
        user_id: '7120607853731562498',
        count: '9',
        cursor: '0',
    }
) {
    return new Promise((resolve) => {
        resolve(require('~/assets/apis/posts.json').data.data.videos);
    });

    try {
        const response = await rapidApi.get('/user/posts', {
            params,
        });
        console.log('API:', response);
        return response.data.data.videos;
    } catch (error) {
        setTimeout(() => {
            console.log('Error', error);
            const response = require('~/assets/apis/posts.json');
            return response.data.data.videos;
        }, 1000);
    }
}
