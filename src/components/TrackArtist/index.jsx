import React from 'react';
import Style from './style.module.css'

const Artist = ({ href,children, ...props }) => {
  return <p className={Style.Artist} ><a {...props} href={href}>{children}</a></p>;
};

export default Artist;