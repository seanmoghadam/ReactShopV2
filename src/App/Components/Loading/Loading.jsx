import React from "react";
import PropTypes from "prop-types";
import {LoadingWrapper} from './Loading.style';

const Loading = (props) => {
  
  return props.loading &&
    <LoadingWrapper>
      Lädt...
    </LoadingWrapper>
  
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading
