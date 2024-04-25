import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout
                        ? route.layout
                        : route.layout === null
                        ? Fragment
                        : DefaultLayout;

                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}
