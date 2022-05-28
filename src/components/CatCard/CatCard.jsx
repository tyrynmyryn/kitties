import React from 'react';
import { useDispatch, } from 'react-redux';
import { toggleCat } from '../../store/catsSlice';
import Icon from '../Icon/Icon';
import imgLoader from '../../images/image-loader.gif';

import s from './CatCard.module.scss';

const CatCard = ({ cat }) => {
    const dispatch = useDispatch()

    const toggleLike = (cat) => {
        dispatch(toggleCat(cat))
    }

    return (
        <div className={s.card}>
            <img src={imgLoader} alt="Kitty" className={s.img} onLoad={(e) => e.target.src = cat.url} />
            <Icon name="heart" className={`${s.icon} ${cat.liked ? s.activeIcon : ''}`} onCLick={() => toggleLike(cat)}/>
        </div>
    );
};

export default CatCard;