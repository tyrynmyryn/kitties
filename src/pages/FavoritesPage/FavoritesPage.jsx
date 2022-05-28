import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CatCard from '../../components/CatCard/CatCard';
import cry from '../../images/cry-cat.png'

import s from './FavoritePage.module.scss';

const FavoritesPage = () => {
    const data = useSelector(state => state.cats.likedData)

    if (!window.localStorage.getItem('liked')) {
        return <Navigate to="/" />
    }

    return (
        <>
            {data.length
                ? 
                data.map(cat => 
                    <CatCard
                        key={cat.id} 
                        cat={cat}
                    /> 
                )
                : 
                <div className={s.empty}>
                    <img src={cry} alt="sad cat" className={s.img}/>
                    <p className={s.text}>Выберите понравившегося котика</p>
                </div>
            }
        </>
    );
};

export default FavoritesPage;