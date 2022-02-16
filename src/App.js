import React from "react";
import PropTypes  from "prop-types";

const App = ({title, subtitle}) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

App.defaultProps = {
  subtitle: 'Subtitle here'
}

export {App};
