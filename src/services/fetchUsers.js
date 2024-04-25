import { f8Api, rapidApi } from '~/utils';

export default function fetchUsers(params) {
    return f8Api
        .request({
            method: 'GET',
            url: '/users/search',
            params,
        })
        .then((response) => {
            return response.data.data;
        });
}

// export default function fetchUsers(params) {
//     return rapidApi
//         .request({
//             method: 'GET',
//             url: '/user/search',
//             params: {
//                 keywords: 'tiktok',
//                 count: '10',
//                 cursor: '0',
//             },
//         })
//         .then((response) => {
//             console.log('User', response);
//             return response.data.data.user_list;
//         });
// }
