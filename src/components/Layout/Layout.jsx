import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss'

const Layout = () => {
    return (
        <>
        <Header />
        <div className={s.container}>
            <div className={s.content}>
                <Outlet />
            </div>
        </div>
        </>
    );
};

export default Layout;