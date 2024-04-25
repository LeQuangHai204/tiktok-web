import {
    faBookmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import { images } from '~/assets';
import { Image, Poppers } from '~/components';

import styles from './Header.module.scss';
import { menuItems } from './constants';

const cx = classNames.bind(styles);

const DropDown = ({ currentUser }) => {
    const userMenu = [
        {
            title: 'View profile',
            icon: faUser,
            to: '/hailq',
        },
        {
            title: 'Favorite',
            icon: faBookmark,
        },
        {
            title: 'Get coin',
            icon: faCoins,
            to: '/coin',
        },
        {
            title: 'Settings',
            icon: faGear,
            to: '/settings',
        },
        ...menuItems,
        {
            title: 'Log out',
            icon: faRightToBracket,
            separate: true,
        },
    ];

    const handleMenuItemClick = (menuItem) => {};

    return (
        <Poppers.Menu
            data={currentUser ? userMenu : menuItems}
            onItemClick={handleMenuItemClick}
        >
            {currentUser ? (
                <Image
                    className={cx('avatar')}
                    src={images.pic1}
                    alt="Loading ..."
                    fallback={images.noImage}
                />
            ) : (
                <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            )}
        </Poppers.Menu>
    );
};

export default DropDown;
