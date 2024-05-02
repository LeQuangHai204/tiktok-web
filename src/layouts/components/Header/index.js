import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { images } from '~/assets';
import { paths } from '~/routes';
import { Image } from '~/components';

import styles from './Header.module.scss';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';
import Dropdown from './Dropdown';

const cx = classNames.bind(styles);

export default function Header() {
    const user = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={paths.home} className={cx('logo')}>
                    <Image src={images.logo} alt="TikTok" />
                </Link>
                <SearchBar />
                <div className={cx('actions')}>
                    <NavMenu user={user} />
                    <Dropdown user={user} />
                </div>
            </div>
        </div>
    );
}
