import PropTypes from "prop-types"
import css from "./Button.module.css"

const theme = {
  primary: css.buttonPrimary,
  secondary: css.buttonSecondary,
}

const Button = ({ onClick, color, children, className, ...restProps }) => {
  return (
    <button
      className={`${theme[color]} ${css.button} ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
}

Button.defaultProps = {
  color: "primary",
}

export default Button
