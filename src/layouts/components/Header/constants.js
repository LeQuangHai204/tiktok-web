import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
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
