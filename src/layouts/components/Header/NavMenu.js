import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import { Button, Icons } from '~/components';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function NavMenu({ currentUser }) {
    return (
        <>
            {currentUser ? (
                <>
                    <Tippy content="Upload" delay={[0, 100]} placement="bottom">
                        <button className={cx('action-btn')}>
                            <Icons.UploadIcon />
                        </button>
                    </Tippy>
                    <Tippy
                        content="Message"
                        delay={[0, 100]}
                        placement="bottom"
                    >
                        <button className={cx('action-btn')}>
                            <Icons.MessageIcon />
                        </button>
                    </Tippy>
                    <Tippy content="Inbox" delay={[0, 100]} placement="bottom">
                        <button className={cx('action-btn')}>
                            <Icons.InboxIcon />
                            <sup className={cx('inbox-count')}>13</sup>
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
                        // leftIcon={
                        //     <FontAwesomeIcon icon={faMagnifyingGlass} />
                        // }
                        // rightIcon={
                        //     <FontAwesomeIcon icon={faMagnifyingGlass} />
                        // }
                        inline
                        onClick={() => {
                            alert('You clicked log in button');
                        }}
                    >
                        Log in
                    </Button>
                </>
            )}
        </>
    );
}
