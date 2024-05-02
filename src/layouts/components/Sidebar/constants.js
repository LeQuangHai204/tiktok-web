import { Icons } from '~/components';
import { paths } from '~/routes';

export const menuItems = [
    {
        title: 'Home',
        icon: Icons.Home,
        to: paths.home,
    },
    {
        title: 'Following',
        icon: Icons.Person,
        to: paths.following,
    },
    {
        title: 'Live',
        icon: Icons.Live,
        to: paths.live,
    },
];
