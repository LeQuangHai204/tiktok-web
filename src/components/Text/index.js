import classNames from 'classnames/bind';

import styles from './Text.module.scss';

const cx = classNames.bind(styles);

const Text = ({ children, className }) => {
    return <p className={cx('text', className)}>{children}</p>;
};

export default Text;
