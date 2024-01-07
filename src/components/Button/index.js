import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export default function Button({
    className,
    to,
    href,
    type, // primary / outline / basic
    size, // size-s / size-l
    shape, // rounded
    leftIcon,
    rightIcon,
    inline,
    disabled,
    children,
    onClick,
    ...rest
}) {
    let Component = "button";

    const props = {
        onClick,
        ...rest,
    };

    if (disabled) {
        Object.keys(props).forEach((element) => {
            if (
                element.startsWith("on") &&
                typeof props[element] === "function"
            ) {
                delete props[element];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }

    const classList = cx("wrapper", className, type, size, shape, {
        disabled,
        inline,
    });

    return (
        <Component className={classList} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("content")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Component>
    );
}
