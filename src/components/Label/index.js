import React, { PropTypes } from "react";
import classnames from "classnames"
import styles from "./index.css"

const Label = ({ value, type="span", className= null, uppercase=true}) =>{

    let rootClass = classnames(styles.root, {
        [styles.h1]: type==="h1",
        [styles.h2]: type==="h2",
        [styles.h3]: type==="h3",
        [styles.h4]: type==="h4",
        [styles.span]: type==="span",
        [className]: (className!=null),
        [styles.uppercase]: (uppercase)
    });
    return React.createElement(type, {className:rootClass},value)
}

Label.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    uppercase: PropTypes.bool,
}

export default Label
