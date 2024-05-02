import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import UserInfo from './UserInfo';
import Gallery from './Gallery';

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <div className={cx('wrapper')}>
            <UserInfo />
            <Gallery />
        </div>
    );
};

export default Profile;
