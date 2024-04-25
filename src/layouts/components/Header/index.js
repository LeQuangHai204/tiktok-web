import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { images } from '~/assets';
import { paths } from '~/routes';

import styles from './Header.module.scss';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';
import DropDown from './DropDown';

const cx = classNames.bind(styles);

export default function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={paths.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>
                <SearchBar />
                <div className={cx('actions')}>
                    <NavMenu currentUser />
                    <DropDown currentUser />
                </div>
            </div>
        </header>
    );
}
