import classNames from 'classnames/bind';

import { Image } from '~/components';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const Avatar = ({ className, size, ...props }) => {
    return (
        <Image
            className={cx('inner', className)}
            width={size}
            height={size}
            {...props}
        />
    );
};

export default Avatar;
