import { useNavigate } from 'react-router-dom';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import { images } from '~/assets';
import { Avatar, Poppers, Button } from '~/components';

import styles from './Header.module.scss';
import { dropdownItems, userMenu } from './constants';

const cx = classNames.bind(styles);

const Dropdown = ({ user }) => {
    const navigate = useNavigate();

    return (
        <Poppers.Menu
            data={user ? userMenu : dropdownItems}
            onItemClick={(item) => navigate(item.to)}
        >
            {/* a redundant div is put here to avoid a warning */}
            <div className={cx('avatar')}>
                {user ? (
                    <Avatar
                        key={user.id}
                        src={images.pic1}
                        alt="Loading ..."
                        fallback={images.noImage}
                        size={40}
                    />
                ) : (
                    <Button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Button>
                )}
            </div>
        </Poppers.Menu>
    );
};

export default Dropdown;
