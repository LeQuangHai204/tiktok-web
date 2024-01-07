import {
    faBookmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faRightToBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";

import { images } from "~/assets";
import { Button, Icons, Image, Poppers } from "~/components";
import styles from "./Header.module.scss";
import Search from "./Search";
import { MENU_ITEMS } from "./constants";

const cx = classNames.bind(styles);

export default function Header() {
    const currentUser = true;
    const userMenu = [
        {
            title: "View profile",
            icon: faUser,
            to: "/hailq",
        },
        {
            title: "Favorite",
            icon: faBookmark,
        },
        {
            title: "Get coin",
            icon: faCoins,
            to: "/coin",
        },
        {
            title: "Settings",
            icon: faGear,
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            title: "Log out",
            icon: faRightToBracket,
            separate: true,
        },
    ];

    const handleMenuItemClick = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <Icons.UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Message"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <Icons.MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <Icons.InboxIcon />
                                    <sup className={cx("inbox-count")}>13</sup>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type="basic" inline>
                                Upload
                            </Button>
                            <Button
                                type="primary"
                                // shape="rounded"
                                // disabled
                                // leftIcon={
                                //     <FontAwesomeIcon icon={faMagnifyingGlass} />
                                // }
                                // rightIcon={
                                //     <FontAwesomeIcon icon={faMagnifyingGlass} />
                                // }
                                inline
                                onClick={() => {
                                    alert("You clicked log in button");
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Poppers.Menu
                        data={currentUser ? userMenu : MENU_ITEMS}
                        onItemClick={handleMenuItemClick}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("avatar")}
                                src={images.pic1}
                                alt="Loading ..."
                                fallback={images.noImage}
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Poppers.Menu>
                </div>
            </div>
        </header>
    );
}
