import React from "react";
import PropTypes from "prop-types";
import { NavBarWrapper, NavBar } from './Navigation.style';

const Navigation = (props) => {
  
  return <NavBarWrapper>
    <NavBar>
      Reactshop
    </NavBar>
    </NavBarWrapper>
};

Navigation.defaultProps = {

};


Navigation.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navigation;





