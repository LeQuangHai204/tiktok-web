import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Menu.module.scss";
import Item from "./Item";
import Header from "./Header";
import { Wrapper } from "~/components/Poppers";

const cx = classNames.bind(styles);

export default function Menu({ children, data, onItemClick = () => {} }) {
    // create a stack storing previous view to go back
    const [menuStack, setMenuStack] = useState([{ data }]);
    let currentMenu = menuStack[menuStack.length - 1];

    // navigate to previous menu by removing current menu from stack
    const handleBack = () => {
        if (menuStack) {
            setMenuStack(menuStack.slice(0, -1));
        }
    };

    // navigate to selected menu by adding it to end of stack

    return (
        <Tippy
            interactive
            delay={[0, 400]}
            offset={[14, 14]}
            animation={false}
            // visible
            placement="bottom-end"
            onHide={() => setMenuStack(menuStack.slice(0, 1))}
            render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx("inner")}>
                        {menuStack.length > 1 && (
                            <Header
                                title={currentMenu.title ?? "Go back"}
                                onBack={handleBack}
                            />
                        )}
                        {currentMenu.data.map((menuItem, index) => (
                            <Item
                                key={index}
                                data={menuItem}
                                onClick={() => {
                                    if (menuItem.childMenu) {
                                        setMenuStack([
                                            ...menuStack,
                                            menuItem.childMenu,
                                        ]);
                                    } else {
                                        onItemClick(menuItem);
                                    }
                                }}
                            />
                        ))}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
