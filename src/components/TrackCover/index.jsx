import React from 'react';
import Style from './style.module.css';

const Cover = ({alt,imageUrl,...props}) => {
    return <div className={Style.Cover}>
            <img
                {...props}
                src={imageUrl}
                alt={alt}
            />
        </div>
};

export default Cover;

