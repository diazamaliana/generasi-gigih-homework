import Style from './style.module.css'

export default function Link({ isExternal = true, children, ...props }) {
  return (
    <a
    {...props}
      className={Style.Link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ); 
}