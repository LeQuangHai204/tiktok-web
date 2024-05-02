import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Avatar, Button, Text, Icons } from '~/components';
import { getUserInfo } from '~/services';

import styles from './Profile.module.scss';
import { faS } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        getUserInfo({
            user_id: '7120607853731562498',
        })
            .then((response) => {
                console.log('RES:', response);

                setUserInfo(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const isMe = true;
    const follow = !true;
    const hasBio = true;

    return userInfo ? (
        <div className={cx('header')}>
            <div className={cx('info')}>
                <Avatar
                    className={cx('avatar')}
                    size="120"
                    src={userInfo.user.avatarThumb}
                />
                <div className={cx('identity')}>
                    <div>
                        <Text className={cx('username')}>
                            <strong>{userInfo.user.uniqueId}</strong>
                        </Text>
                        <Text className={cx('nickname')}>
                            {userInfo.user.nickname}
                        </Text>
                    </div>
                    {isMe ? (
                        <Button className={cx('edit-btn')} type="normal">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className={cx('edit-icon')}
                            />
                            <span>Edit Profile</span>
                        </Button>
                    ) : follow ? (
                        <div className={cx('action')}>
                            <Button
                                className={cx('message-btn')}
                                type="outline"
                            >
                                Messages
                            </Button>
                            <Button
                                className={cx('unfollow-btn')}
                                size="size-xs"
                            >
                                <Icons.Follow />
                            </Button>
                        </div>
                    ) : (
                        <Button className={cx('follow-btn')} type="primary">
                            Follow
                        </Button>
                    )}
                </div>
                <div>
                    <FontAwesomeIcon
                        className={cx('share-btn')}
                        icon={faShare}
                    />
                </div>
            </div>
            <div className={cx('stats')}>
                <div>
                    {[
                        {
                            figure: userInfo.stats.followingCount,
                            description: 'Following',
                        },
                        {
                            figure: userInfo.stats.followerCount,
                            description: 'Followers',
                        },
                        {
                            figure: userInfo.stats.heart,
                            description: 'Likes',
                            disabled: true,
                        },
                    ].map((stat, index) => (
                        <span className={cx('stat-box')} key={index}>
                            <Button
                                className={cx('stat-figure')}
                                fontWeight="bold"
                                size="size-xxs"
                                to={stat.to}
                                href={stat.href}
                                disabled={stat.disabled}
                            >
                                {stat.figure}
                            </Button>
                            <Button
                                className={cx('stat-description')}
                                type="basic"
                                size="size-xxs"
                                to={stat.to}
                                href={stat.href}
                                disabled={stat.disabled}
                            >
                                {stat.description}
                            </Button>
                        </span>
                    ))}
                </div>
            </div>
            {hasBio && (
                <div className={cx('signature')}>{userInfo.user.signature}</div>
            )}
        </div>
    ) : null;
};

export default UserInfo;
