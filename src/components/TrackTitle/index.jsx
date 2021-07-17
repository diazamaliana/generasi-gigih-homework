import React from 'react';
import Style from './style.module.css';

const Title = ({children,...props}) => {
    return <h2 {...props} className={`${Style.Title}`}>{children}</h2>
};

export default Title;

