import React from 'react';
import loader from '../../images/loader.svg'

import s from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="Загрузка"/>
        </div>
    );
};

export default Loader;