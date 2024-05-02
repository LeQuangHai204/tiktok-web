import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faBookmark,
    faCoins,
    faGear,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Icons } from '~/components';

export const dropdownItems = [
    {
        title: 'English',
        icon: faEarthAsia,
        childMenu: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    title: 'English',
                    code: 'en',
                },
                {
                    type: 'language',
                    title: 'Tiếng Việt',
                    code: 'vie',
                },
                {
                    type: 'language',
                    title: 'English',
                    code: 'en',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: faCircleQuestion,
        to: '/feedback',
    },
    {
        title: 'Keyboard shortcut',
        icon: faKeyboard,
    },
];

export const navItems = [
    {
        content: 'Upload',
        Icon: Icons.Upload,
    },
    {
        content: 'Message',
        Icon: Icons.Message,
    },
    {
        content: 'Inbox',
        Icon: Icons.Inbox,
    },
];

export const userMenu = [
    {
        title: 'View profile',
        icon: faUser,
        to: '/@Quỳnh Trâm',
    },
    {
        title: 'Favorite',
        icon: faBookmark,
    },
    {
        title: 'Get coin',
        icon: faCoins,
        to: '/coin',
    },
    {
        title: 'Settings',
        icon: faGear,
        to: '/settings',
    },
    ...dropdownItems,
    {
        title: 'Log out',
        icon: faRightToBracket,
        separate: true,
    },
];
