import React from "react";
import PropTypes  from "prop-types";

const App = ({sayHi, subtitle}) => {

  return (
    <>
      <h1>{ sayHi }</h1>
      <p>{subtitle}</p>
    </>
  )
};

App.propTypes = {
  sayHi: PropTypes.string.isRequired
};

App.defaultProps = {
  sayHi: "Title here",
  subtitle: 'Subtitle here'
}

export {App};
