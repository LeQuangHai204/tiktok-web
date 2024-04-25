import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { images } from '~/assets';
import { AccountItem, Button, Image } from '~/components';
import { fetchUser } from '~/services';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function UserMenu({ label }) {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUser({ params: { q: 'ng hoa', type: 'less' } })
            .then((response) => setUserList(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handleRender = (attrs, user) => {
        return (
            <div className={cx('menu-tooltip')}>
                <div className={cx('tooltip-header')} tabIndex="-1" {...attrs}>
                    <Image
                        className={cx('avatar')}
                        src={user.avatar}
                        alt="Loading ..."
                        fallback={images.noImage}
                    />
                    <Button className={cx('follow-btn')} type={'primary'}>
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
                        <strong>8.2M</strong> followers
                    </span>
                    <span className={cx('stats')}>
                        <strong>8.2M</strong> likes
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className={cx('user-menu')}>
            <div className={cx('menu-label')}>{label}</div>

            {userList.map((user, index) => (
                <Tippy
                    interactive
                    animation={false}
                    delay={[600, 400]}
                    placement="bottom"
                    render={(attrs) => handleRender(attrs, user)}
                >
                    <div>
                        <AccountItem
                            key={index}
                            className={cx('menu-item')}
                            userData={user}
                        ></AccountItem>
                    </div>
                </Tippy>
            ))}
        </div>
    );
}
