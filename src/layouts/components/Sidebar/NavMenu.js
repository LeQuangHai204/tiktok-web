import classNames from 'classnames/bind';

import { Button } from '~/components';
import { menuItems } from './constants';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const NavMenu = () => {
    return (
        <nav className={cx('nav-menu')}>
            {menuItems.map((item, index) => (
                <Button
                    key={index}
                    className={cx('menu-item')}
                    iconClassName={cx('menu-icon')}
                    titleClassName={cx('menu-title')}
                    to={item.to}
                    leftIcon={item.icon}
                >
                    {item.title}
                </Button>
            ))}
        </nav>
    );
};

export default NavMenu;
