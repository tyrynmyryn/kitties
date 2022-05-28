import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCats } from '../../store/catsSlice';
import { fetchCats } from '../../services/fetchCats';
import CatCard from '../../components/CatCard/CatCard';

const MainPage = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.cats.data)

    useEffect(() => {
        if (!data) {
            fetchCats(100)
                .then(res => dispatch(updateCats(res)))
        }
    }, [])

    return (
        <>
            {data 
                ? data.map(cat =>
                    <CatCard
                        key={cat.id} 
                        cat={cat}
                    />    
                )
                : <h2>Загрузка...</h2>
            }
        </>
    );
};

export default MainPage;