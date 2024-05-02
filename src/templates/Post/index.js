import classNames from 'classnames/bind';

import { Avatar, Video, Button, Caption } from '~/components';

import styles from './Post.module.scss';
import Content from './Content';

const cx = classNames.bind(styles);

const Post = ({ video }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Avatar size="60" src={video.author.avatar} />
            </div>
            <Content video={video} />
            <div className={cx('btn-container')}>
                <Button
                    className={cx('follow-btn')}
                    type="outline"
                    fontWeight="normal"
                    size="size-l"
                >
                    follow
                </Button>
            </div>
        </div>
    );
};

export default Post;
