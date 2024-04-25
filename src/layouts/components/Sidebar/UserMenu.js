import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import { AccountItem, UserTooltip } from '~/components';
import { fetchUsers } from '~/services';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function UserMenu({ label }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers({ q: 'ng hoa', type: 'less' })
            .then((response) => {
                setUsers(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className={cx('user-menu')}>
            <div className={cx('menu-label')}>{label}</div>

            {users.map((user, index) => (
                <div key={index}>
                    <Tippy
                        interactive
                        animation={false}
                        delay={[600, 400]}
                        placement="bottom"
                        render={(attrs) => UserTooltip({ attrs, user })}
                    >
                        <div>
                            <AccountItem
                                className={cx('menu-item')}
                                userData={user}
                            ></AccountItem>
                        </div>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}
