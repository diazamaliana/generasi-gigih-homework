import React from 'react';
import './style.css';

//Type '{ children: string; type: string; "aria-label": string; }' is missing the following properties from type '{ [x: string]: any; children: any; type: any; buttonStyle: any; buttonSize: any; }': buttonStyle, buttonSize

interface IButton {
    type: string,
    children: string | JSX.Element,
    buttonStyle: any; 
    buttonSize: any;
}

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
}: IButton) => {
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