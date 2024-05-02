import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import { images } from '~/assets';
import { Avatar } from '~/components';

import styles from './Account.module.scss';

const cx = classNames.bind(styles);

const Account = ({
    userData: { avatar, full_name: fullName, nickname: nickName, tick },
    className,
}) => {
    return (
        <Link to={`/@${nickName}`} className={cx('wrapper', className)}>
            <Avatar
                className={cx('avatar')}
                src={avatar}
                alt="Loading ..."
                size={40}
                fallback={images.noImage}
            />
            <div className={cx('info')}>
                <div className={cx('realname')}>
                    <h4 className={cx('fullname')}>{fullName}</h4>
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

Account.propTypes = {
    userData: propTypes.shape({
        avatar: propTypes.string,
        full_name: propTypes.string,
        nickname: propTypes.string,
        tick: propTypes.bool,
    }),
};

export default Account;
