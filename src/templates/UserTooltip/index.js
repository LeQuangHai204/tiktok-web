import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';

import { images } from '~/assets';
import { Button, Image } from '~/components';

import styles from './UserTooltip.module.scss';

const cx = classNames.bind(styles);

const UserTooltip = ({ attrs, user }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tooltip-header')} tabIndex="-1" {...attrs}>
                <Image
                    className={cx('avatar')}
                    src={user.avatar}
                    alt="Loading ..."
                    fallback={images.noImage}
                />
                <Button
                    className={cx('follow-btn')}
                    type="primary"
                    size="size-s"
                    to={`/@${user.id}/follow`}
                >
                    Follow
                </Button>
            </div>
            <div className={cx('tooltip-data')}>
                <div className={cx('fullname')}>
                    {user.full_name}
                    {user.tick && (
                        <FontAwesomeIcon
                            className={cx('checked-icon')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </div>
                <div className={cx('nickname')}>{user.nickname}</div>
                <span className={cx('stats')}>
                    <strong>{user.followers_count}</strong> followers
                </span>
                <span className={cx('stats')}>
                    <strong>{user.likes_count}</strong> likes
                </span>
            </div>
        </div>
    );
};

UserTooltip.propTypes = {
    attrs: propTypes.object,
    user: propTypes.shape({
        avatar: propTypes.string,
        full_name: propTypes.string,
        nickname: propTypes.string,
        tick: propTypes.bool,
    }),
};

export default UserTooltip;
