import React from 'react';
import PropTypes from 'prop-types';


export default function SayHello({ name, greeting = "I bet you like the app" }) {
  return (
    <>
    <div>Hello, {name}</div>
    <p>{greeting}</p>
    </>
  )
}
SayHello.defaultProps = {
  greeting: "I bet you like the app",
};


SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string,
  
}
