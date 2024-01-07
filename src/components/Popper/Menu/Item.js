import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

export default function Item({ data: { icon, title, separate }, onClick }) {
    return (
        <Button
            className={cx("item", { separate })}
            leftIcon={icon && <FontAwesomeIcon icon={icon} />}
            onClick={onClick}
        >
            {title}
        </Button>
    );
}
