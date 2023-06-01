import PropTypes from "prop-types";
const Button = ({ variant='primary', size='md', children="Button", color='#30A2FF' }) => {
  let Size = "";
  let vari = {};
  if (size === "lg") Size = "20px";
  else if (size === "md") Size = "18px";
  else if (size === "sm") Size = "16px";

  if (variant === "primary")
    vari = {
      backgroundColor: color,
      border: `1px solid ${color}`,
      color: 'white',
    };
    else if(variant === "secondary") vari ={
        backgroundColor: 'white',
        border: `1px solid ${color}`,
        color: color,
    }
    else if( variant === 'text') vari={
        backgroundColor:'transparent',
        border:'none',
        color:color,
        textDecoration :'underline'
    }
  let style = {
    fontSize: Size,
    borderRadius: "8px",
    padding:'0.5em 2em ',
    ...vari
  };
  return <button style={style}>{children}</button>;
};
export default Button;

Button.propTypes = {
    /** Variant of the button that have these values  */
  variant: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
    /** Font size of the button */
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
    /** Main Color  */
  color: PropTypes.string.isRequired,
    /** Button content */
  children: PropTypes.any.isRequired,
};
