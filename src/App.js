import React from "react";
import PropTypes  from "prop-types";

const App = ({sayHi}) => {

  return (
    <>
      <h1>{ sayHi }</h1>
      <p>Mi first App</p>
    </>
  )
};

App.propTypes = {
  sayHi: PropTypes.string.isRequired
};

export {App};
