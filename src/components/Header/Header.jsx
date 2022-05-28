import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <CustomLink to="/">Все котики</CustomLink>
                <CustomLink to="/favorites">Любимые котики</CustomLink>
            </nav>
        </header>
    );
};

export default Header;