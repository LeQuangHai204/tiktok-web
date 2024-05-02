import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import { Button } from '~/components';

import styles from './Header.module.scss';
import { navItems } from './constants';

const cx = classNames.bind(styles);

export default function NavMenu({ user }) {
    if (!user)
        return (
            <>
                <Button type="basic" inline>
                    Upload
                </Button>
                <Button type="primary" inline>
                    Log in
                </Button>
            </>
        );

    return (
        <>
            {navItems.map(({ content, Icon, ...props }, index) => (
                <Tippy
                    key={index}
                    content={content}
                    delay={[0, 100]}
                    placement="bottom"
                >
                    <div>
                        <Button className={cx('action-btn')} size="size-xs">
                            <Icon {...props} />
                        </Button>
                    </div>
                </Tippy>
            ))}
        </>
    );
}
