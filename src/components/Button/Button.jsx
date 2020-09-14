import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const { label, className, handleClick } = props;

  return (
    <>
      <button className={className} onClick={handleClick}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  handleClick: propTypes.func,
};

export default Button;
