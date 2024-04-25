import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
};

Header.propTypes = {
    title: propTypes.string.isRequired,
    onBack: propTypes.func.isRequired,
};

export default Header;
