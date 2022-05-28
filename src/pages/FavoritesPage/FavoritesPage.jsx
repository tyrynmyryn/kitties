import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CatCard from '../../components/CatCard/CatCard';

const FavoritesPage = () => {
    const data = useSelector(state => state.cats.likedData)

    if (!window.localStorage.getItem('liked')) {
        return <Navigate to="/" />
    }

    return (
        <>
            {data.length
                ? data.map(cat => 
                    <CatCard
                        key={cat.id} 
                        cat={cat}
                    /> 
                )
                : <h2>Добавьте любимого котика</h2>
            }
        </>
    );
};

export default FavoritesPage;