import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import { Account, UserTooltip } from '~/templates';
import { searchUser } from '~/services';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function UserMenu({ label, preview }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        searchUser({ q: 'ng hoa', type: 'less' })
            .then((response) => {
                setUsers(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!preview) {
        return (
            <div className={cx('user-menu')}>
                <div className={cx('menu-label')}>{label}</div>
                {users.map((user, index) => (
                    <Account
                        key={index}
                        className={cx('menu-item')}
                        userData={user}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={cx('user-menu')}>
            <div className={cx('menu-label')}>{label}</div>
            {users.map((user, index) => (
                <div key={index} className={cx('menu-content')}>
                    <Tippy
                        interactive
                        animation={false}
                        delay={[600, 400]}
                        placement="bottom"
                        render={(attrs) => (
                            <UserTooltip attrs={attrs} user={user} />
                        )}
                    >
                        <div>
                            <Account
                                className={cx('menu-item')}
                                userData={user}
                            />
                        </div>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}
