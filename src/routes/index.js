import { HeaderOnlyLayout } from "~/layouts";
import { Home, Following, Profile, Upload, Search } from "~/pages";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/:anything", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnlyLayout },
    { path: "/search", component: Search, layout: null },
];

export const privateRoutes = [];
