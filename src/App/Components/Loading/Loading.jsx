import React from "react";
import PropTypes from "prop-types";
import "./Loading.scss"

const Loading = (props) => {

    return props.loading &&
        <div className="loading-wrapper">
            Lädt...
        </div>
};

Loading.propTypes = {
    loading: PropTypes.bool
};

export default Loading
