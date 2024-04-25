import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { AccountItem, Poppers } from '~/components';
import { useDebounce } from '~/hooks';
import { fetchUser } from '~/services';

const cx = classNames.bind(styles);

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();
    const debouncedSearchInput = useDebounce(searchInput, 600);

    useEffect(() => {
        // when search input is empty, clear search result
        if (!debouncedSearchInput.trim()) {
            setSearchResult([]);
            return;
        }

        setIsLoading(true);
        fetchUser({ params: { q: debouncedSearchInput, type: 'less' } })
            .then((response) => {
                setSearchResult(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [debouncedSearchInput]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        // using a div to wrap Tippy component to avoid warning
        <div>
            <Tippy
                interactive
                // animation={false}
                visible={showResult && searchResult.length > 0}
                placement="bottom"
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <Poppers.Wrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
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
                <div className={cx('search-bar')}>
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
                            className={cx('clear-btn')}
                            onClick={() => {
                                setSearchInput('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {isLoading && (
                        <FontAwesomeIcon
                            className={cx('loading-icon')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(ev) => {
                            ev.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
