import React from 'react';
import iconPath from '../../images/icons.svg';

const Icon = ({name, className, onCLick}) => {
    return (
        <svg className={className} onClick={onCLick}>
            <use xlinkHref={`${iconPath}#${name}`} />
        </svg>
    );
};

export default Icon;