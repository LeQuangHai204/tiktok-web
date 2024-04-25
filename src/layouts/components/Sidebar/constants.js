import { Icons } from '~/components';
import { paths } from '~/routes';

export const menuItems = [
    {
        title: 'Home',
        icon: Icons.HomeIcon,
        to: paths.home,
    },
    {
        title: 'Following',
        icon: Icons.PersonIcon,
        to: paths.following,
    },
    {
        title: 'Live',
        icon: Icons.LiveIcon,
        to: paths.live,
    },
];
