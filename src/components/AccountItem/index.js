import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./AccountItem.module.scss";
import { images } from "~/assets";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

export default function AccountItem({
    userData: { avatar, full_name: fullName, nickname: nickName, tick },
}) {
    return (
        <Link to={`/@${nickName}`} className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src={avatar}
                alt="Loading ..."
                fallback={images.noImage}
            />
            <div className={cx("info")}>
                <h4 className={cx("realname")}>
                    <span>{fullName}</span>
                    {tick && (
                        <FontAwesomeIcon
                            className={cx("checked-icon")}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </h4>
                <span className={cx("username")}>{nickName}</span>
            </div>
        </Link>
    );
}
