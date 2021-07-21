import React from 'react';

import Style from './style.module.css';

const Heading = ({children}) => {
    return(
        <div className={Style.Heading} >
          <h1 >{children}</h1>
        </div>    
    )
}

export default Heading;