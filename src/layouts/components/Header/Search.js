import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import { AccountItem, Poppers } from "~/components";

const cx = classNames.bind(styles);

export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchInput.trim()) {
            setSearchResult([]);
            return;
        }

        setIsLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchInput
            )}&type=less`
        )
            .then((response) => response.json())
            .then((response) => {
                setSearchResult(response.data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [searchInput]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <Tippy
                Tippy
                interactive
                // animation={false}
                visible={showResult && searchResult.length > 0}
                // visible
                placement="bottom"
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <Poppers.Wrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    userData={result}
                                />
                            ))}
                        </Poppers.Wrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search-bar")}>
                    <input
                        ref={inputRef}
                        value={searchInput}
                        placeholder="Search accounts and videos"
                        onChange={(ev) =>
                            setSearchInput(ev.target.value.trimStart())
                        }
                        onFocus={() => setShowResult(true)}
                    />
                    {searchInput && !isLoading && (
                        <button
                            className={cx("clear-btn")}
                            onClick={() => {
                                setSearchInput("");
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {isLoading && (
                        <FontAwesomeIcon
                            className={cx("loading-icon")}
                            icon={faSpinner}
                        />
                    )}
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
