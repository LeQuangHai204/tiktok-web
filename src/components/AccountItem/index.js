import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import { images } from '~/assets';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountItem = ({
    userData: { avatar, full_name: fullName, nickname: nickName, tick },
    className,
}) => {
    return (
        <Link to={`/@${nickName}`} className={cx('wrapper', className)}>
            <Image
                className={cx('avatar')}
                src={avatar}
                alt="Loading ..."
                fallback={images.noImage}
            />
            <div className={cx('info')}>
                <div className={cx('realname')}>
                    <span className={cx('fullname')}>{fullName}</span>
                    {tick && (
                        <FontAwesomeIcon
                            className={cx('checked-icon')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </div>
                <div className={cx('username')}>{nickName}</div>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    userData: propTypes.shape({
        avatar: propTypes.string,
        full_name: propTypes.string,
        nickname: propTypes.string,
        tick: propTypes.bool,
    }),
};

export default AccountItem;
