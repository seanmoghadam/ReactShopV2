import React from "react";
import PropTypes from "prop-types";

const Navigation = (props) => {
  
  return <div>
    {props.title}
    <button disabled={props.disableButton}>
      Klick mich
    </button>
  </div>
  
};


Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  disableButton : PropTypes.bool.isRequired
};

export default Navigation;





