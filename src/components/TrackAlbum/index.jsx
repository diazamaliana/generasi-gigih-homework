import React from 'react';
import Style from './style.module.css';

const Album = ({ children,...props}) => {
    return <p {...props} className={`${Style.Album}`}><a {...props}>{children}</a></p>
};

export default Album;