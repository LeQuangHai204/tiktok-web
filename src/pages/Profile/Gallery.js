import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Video, Icons, Text } from '~/components';
import { fetchVideos } from '~/services';

import styles from './Profile.module.scss';

const cx = classnames.bind(styles);

const Gallery = () => {
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

    return videos ? (
        <div className={cx('gallery')}>
            {videos.map((video, index) => (
                <div key={index} className={cx('post')}>
                    <div className={cx('video')}>
                        <Video
                            key={index}
                            src={video.play}
                            controls={false}
                            className={cx('record')}
                        />
                        <strong className={cx('views')}>
                            <Icons.Play width="18" height="18" />
                            <strong className={cx('count')}>
                                {video.play_count}
                            </strong>
                        </strong>
                    </div>
                    <Text className={cx('caption')}>{video.title}</Text>
                </div>
            ))}
        </div>
    ) : null;
};

export default Gallery;
