import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './CustomLink.module.scss';

const CustomLink = ({ to, children, scrollTop = true, ...props }) => {
    const onScrollTop = () => {
        if (scrollTop) {
            window.scrollTo(0 , 0)
        }
    }

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${s.link} ${isActive ? s.activeLink : ''}`}
            onClick={onScrollTop}
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;