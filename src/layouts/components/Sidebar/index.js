import classNames from 'classnames/bind';

import NavMenu from './NavMenu';
import UserMenu from './UserMenu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <NavMenu />
            <UserMenu label="Suggested for you" />
            <UserMenu label="Following" />
        </div>
    );
}
