import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src={images.pic1} alt="Loading ..." />
            <div className={cx("info")}>
                <h4 className={cx("realname")}>
                    <span>My name</span>
                    <FontAwesomeIcon
                        className={cx("checked-icon")}
                        icon={faCheckCircle}
                    ></FontAwesomeIcon>
                </h4>
                <span className={cx("username")}>username@gmail</span>
            </div>
        </div>
    );
}
