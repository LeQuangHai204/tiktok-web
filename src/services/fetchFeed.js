import axios from 'axios';

export default async function fetchVideos(params) {
    return new Promise((resolve) => {
        resolve(require('~/assets/apis/videos.json').data.data.videos);
    });

    const options = {
        method: 'GET',
        url: 'https://tiktok-scraper7.p.rapidapi.com/feed/list',
        params,
        headers: {
            'X-RapidAPI-Key':
                '37fdbc3c20msh1423550fba2ae87p1c4b83jsn0fd6920000ee',
            'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        console.log('Successful', response);
        return response.data.data;
    } catch (error) {
        setTimeout(() => {
            return require('~/assets/apis/videos.json');
        }, 1000);
    }
}
