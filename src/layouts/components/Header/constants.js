import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_ITEMS = [
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
