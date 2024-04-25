import React, { useEffect, useState } from 'react';

import { fetchVideos } from '~/services';
import { Video } from '~/components';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetchVideos({
        //     keywords: 'fyp',
        //     region: 'us',
        //     count: '10',
        //     cursor: '0',
        //     publish_time: '0',
        //     sort_type: '0',
        // })
        //     .then((response) => {
        //         console.log(response.data.videos);
        //         setVideos(response.data.videos);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching videos:', error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, []);

    return (
        <div>
            {/* <h2>Video List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {videos.map((video) => (
                        <div key={video.aweme_id}>
                            <h3>{video.title}</h3>
                            <h3>{video.author.nickname}</h3>
                            <Video video={video} />
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default Home;
