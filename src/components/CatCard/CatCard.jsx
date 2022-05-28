import React from 'react';
import { useDispatch, } from 'react-redux';
import { toggleCat } from '../../store/catsSlice';
import Icon from '../Icon/Icon';

import s from './CatCard.module.scss';

const CatCard = ({ cat }) => {
    const dispatch = useDispatch()

    const toggleLike = (cat) => {
        dispatch(toggleCat(cat))
    }

    return (
        <div className={s.card}>
            <img src={cat.url} alt="" className={s.img}/>
            <Icon name="heart" className={`${s.icon} ${cat.liked ? s.activeIcon : ''}`} onCLick={() => toggleLike(cat)}/>
        </div>
    );
};

export default CatCard;