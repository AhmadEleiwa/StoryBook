import PropTypes from "prop-types";
const Button = ({
  variant = "primary",
  color = "primary",
  size = "md",
  children = "Button",
}) => {
  let Size = "";
  let vari = {};
  let Color = "";
  if (size === "lg") Size = "20px";
  else if (size === "md") Size = "18px";
  else if (size === "sm") Size = "16px";
  if (color === "primary") Color = "#30A2FF";
  else if (color === "warning") Color = "#FFB84C";
  else if (color === "error") Color = "#CD1818";

  if (variant === "primary")
    vari = {
      backgroundColor: Color,
      border: `1px solid ${Color}`,
      color: "white",
    };
  else if (variant === "secondary")
    vari = {
      backgroundColor: "white",
      border: `1px solid ${Color}`,
      color: Color,
    };
  else if (variant === "text")
    vari = {
      backgroundColor: "transparent",
      border: "none",
      color: Color,
      textDecoration: "underline",
    };
  let style = {
    fontSize: Size,
    borderRadius: "8px",
    padding: "0.5em 2em ",
    ...vari,
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
  color: PropTypes.oneOf(["primary", "warning", "error"]).isRequired,
  /** Button content */
  children: PropTypes.any.isRequired,
};
