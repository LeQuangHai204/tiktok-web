import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

const Wrapper = ({ className, children }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

Wrapper.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
};

export default Wrapper;
