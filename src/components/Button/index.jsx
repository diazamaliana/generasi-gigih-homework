import React from 'react';
import './style.css';

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline"
];

const SIZES = [ "btn--medium", "btn--large","btn--small"];

const Button = ({
    children, 
    type,  
    buttonStyle, 
    buttonSize,
    ...props
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    return (
        <button 
            {...props}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
        >
            {children}
        </button>
    )
};

export default Button;