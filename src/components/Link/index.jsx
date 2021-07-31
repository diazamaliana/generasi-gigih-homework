import Style from './style.module.css'

const Link = ({ children, ...props }) => {
  return (
      <a {...props} className={Style.Link}>{children} </a>
  ); 
}

export default Link;