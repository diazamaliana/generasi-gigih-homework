import Style from './style.module.css'

const Link = ({ isExternal = true, children, ...props }) => {
  return (
    <>
      <a
      {...props}
        className={Style.Link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </a>
    </>
  ); 
}

export default Link;