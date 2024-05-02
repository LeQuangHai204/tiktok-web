import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Video, Button, Caption, Text } from '~/components';

import styles from './Post.module.scss';
import { actionMenu } from './constants';

const cx = classNames.bind(styles);

const Content = ({ video }) => {
    return (
        <div>
            <div className={cx('caption')}>
                <Text>
                    <strong>{video.author.nickname}</strong>
                </Text>
                <Caption>{video.title}</Caption>
                <div>{video.music_info.title}</div>
            </div>
            <div className={cx('content')}>
                <Video
                    className={cx('video')}
                    src={video.play}
                    width={387}
                    height={688}
                />
                <div className={cx('action-menu')}>
                    {actionMenu.map((item, index) => (
                        <div key={index} className={cx('action-item')}>
                            <Button className={cx('action-icon')} size="size-s">
                                <FontAwesomeIcon icon={item.icon} />
                            </Button>
                            <div className={cx('action-count')}>
                                {video[item.count]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
