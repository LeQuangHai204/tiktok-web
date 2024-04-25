import fetchApi from '~/utils/fetchApi';

export default function fetchUser(config) {
    return fetchApi(
        'get',
        process.env.REACT_APP_BASE_URL + '/users/search',
        config
    ).then((response) => response.data);
}
