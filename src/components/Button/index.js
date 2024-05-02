import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

import styles from './Button.module.scss';
import { Icons } from '~/components';

const cx = classNames.bind(styles);

const Button = ({
    className,
    iconClassName,
    titleClassName,
    to,
    href,
    type, // primary / outline / basic
    size, // size-s / size-l
    fontWeight = 'regular', // normal / bold
    shape, // rounded
    leftIcon,
    rightIcon,
    inline,
    disabled,
    blurred,
    children,
    onClick,
    ...rest
}) => {
    let Component = 'button';
    const Icon = Icons.default;

    const props = {
        ...rest,
    };

    // Remove all event listeners if the button is disabled
    if (disabled) {
        Object.keys(props).forEach((element) => {
            if (
                element.startsWith('on') &&
                typeof props[element] === 'function'
            ) {
                delete props[element];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = NavLink;
    } else if (href) {
        props.href = href;
        Component = 'a';
    } else {
        props.onClick = onClick;
        Component = 'button';
    }

    const active = to === window.location.pathname;
    const classList = cx('wrapper', className, type, size, shape, fontWeight, {
        disabled,
        blurred,
        inline,
        active,
    });

    return (
        <Component className={classList} {...props}>
            <Icon className={cx('icon', iconClassName)} icon={leftIcon} />
            <span className={cx('content', titleClassName)}>{children}</span>
            <Icon className={cx('icon', iconClassName)} icon={rightIcon} />
        </Component>
    );
};

Button.propTypes = {
    className: propTypes.string,
    to: propTypes.string,
    href: propTypes.string,
    type: propTypes.oneOf(['primary', 'outline', 'basic']),
    size: propTypes.oneOf(['size-s', 'size-l', 'size-xs']),
    shape: propTypes.oneOf(['rounded']),
    fontWeight: propTypes.oneOf(['normal', 'bold']),
    leftIcon: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({
            prefix: propTypes.oneOf(['fas']),
            iconName: propTypes.string.isRequired,
        }),
    ]),
    rightIcon: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({
            prefix: propTypes.oneOf(['fas']),
            iconName: propTypes.string.isRequired,
        }),
    ]),
    inline: propTypes.bool,
    disabled: propTypes.bool,
    children: propTypes.node.isRequired,
    onClick: propTypes.func,
};

export default Button;
