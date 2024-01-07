import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faBookmark,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";

import { Wrapper, Menu } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import { UploadIcon, InboxIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: "English",
        icon: faEarthAsia,
        childMenu: {
            title: "Language",
            data: [
                {
                    type: "language",
                    title: "English",
                    code: "en",
                },
                {
                    type: "language",
                    title: "Tiếng Việt",
                    code: "vie",
                },
            ],
        },
    },
    {
        title: "Feedback and help",
        icon: faCircleQuestion,
        to: "/feedback",
    },
    {
        title: "Keyboard shortcut",
        icon: faKeyboard,
    },
];

export default function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);

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
                <div>
                    <Tippy
                        interactive
                        animation={false}
                        render={(attrs) => (
                            <div
                                className={cx("search-result")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Wrapper>
                                    <h4 className={cx("search-title")}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </Wrapper>
                            </div>
                        )}
                    >
                        <div className={cx("search-bar")}>
                            <input placeholder="Search accounts and videos" />
                            <button className={cx("clear-btn")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx("loading-icon")}
                                icon={faSpinner}
                            />
                            <button className={cx("search-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload video"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
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
                                leftIcon={
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                }
                                rightIcon={
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                }
                                inline
                                onClick={() => {
                                    alert("You clicked log in button");
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu data={userMenu} onItemClick={handleMenuItemClick}>
                        {currentUser ? (
                            <img
                                className={cx("avatar")}
                                src={images.pic1}
                                alt="Loading ..."
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
