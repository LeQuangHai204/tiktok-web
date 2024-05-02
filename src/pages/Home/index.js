import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import { fetchVideos } from '~/services';

import styles from './Home.module.scss';
import { Post } from '~/templates';

const cx = classnames.bind(styles);

const Home = () => {
    const [videos, setVideos] = useState();

    useEffect(() => {
        fetchVideos({
            user_id: '7120607853731562498',
            count: '9',
            cursor: '0',
        }).then((data) => {
            setVideos(data);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videos && (
                <div className={cx('inner')}>
                    {videos.map((video, index) => (
                        <Post key={index} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
