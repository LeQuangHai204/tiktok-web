import {
    faHeart,
    faCommentDots,
    faBookmark,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

export const actionMenu = [
    {
        title: 'Like',
        icon: faHeart,
        count: 'digg_count',
    },
    {
        title: 'Comment',
        icon: faCommentDots,
        count: 'comment_count',
    },
    {
        title: 'Save',
        icon: faBookmark,
        count: 'collect_count',
    },
    {
        title: 'Share',
        icon: faShare,
        count: 'share_count',
    },
];
