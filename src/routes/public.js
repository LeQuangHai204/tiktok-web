import { HeaderOnlyLayout } from '~/layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';
import paths from './paths';

export default [
    { path: paths.home, component: Home },
    { path: paths.following, component: Following },
    { path: paths.profile, component: Profile },
    { path: paths.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: paths.search, component: Search, layout: null },
];
