import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import propTypes from 'prop-types';

import { Wrapper } from '~/components/Poppers';
import Button from '~/components/Button';

import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

const Menu = ({
    children,
    data,
    hideOnClick = false,
    onItemClick = () => {},
    ...restProps
}) => {
    // create a stack storing previous view to go back
    const [menuStack, setMenuStack] = useState([{ data }]);
    let currentMenu = menuStack[menuStack.length - 1];

    // navigate to previous menu by removing current menu from stack
    const handleBack = () => {
        if (menuStack) {
            setMenuStack(menuStack.slice(0, -1));
        }
    };

    // navigate to child menu or trigger on item click
    const handleClick = (item) => {
        if (item.childMenu) {
            setMenuStack([...menuStack, item.childMenu]);
        } else {
            onItemClick(item);
        }
    };

    // navigate to main menu by removing all menus except first one
    const handleReset = () => setMenuStack(menuStack.slice(0, 1));

    // navigate to selected menu by adding it to end of stack
    const handleRender = (attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('inner')}>
                {menuStack.length > 1 && (
                    <Header
                        title={currentMenu.title ?? 'Go back'}
                        onBack={handleBack}
                    />
                )}
                {currentMenu.data.map((item, index) => (
                    <Button
                        key={index}
                        className={cx('menu-item')}
                        leftIcon={item.icon}
                        onClick={() => handleClick(item)}
                    >
                        {item.title}
                    </Button>
                ))}
            </Wrapper>
        </div>
    );

    return (
        <Tippy
            {...restProps}
            interactive
            delay={[0, 400]}
            offset={[14, 14]}
            animation={false}
            // visible
            hideOnClick={hideOnClick}
            placement="bottom-end"
            onHide={handleReset}
            render={handleRender}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: propTypes.node.isRequired,
    data: propTypes.array.isRequired,
    hideOnClick: propTypes.bool,
    onItemClick: propTypes.func,
};

export default Menu;
