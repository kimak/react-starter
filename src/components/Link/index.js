import React, { PropTypes } from "react";
import RouterLink from "react-router/lib/Link"

import classnames from "classnames"
import styles from "./index.css"

const Link = ({ label, href, external=false, className= null}) =>{

    let rootClass = classnames(styles.root, {
        [className]: (className!=null),
    });

    if(external) {
        return <a className={rootClass} href={href}>{label}</a>
    }else{
        return <RouterLink className={rootClass} to={href}>{label}</RouterLink>;
    }
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    external: PropTypes.bool,
    className: PropTypes.string,
}

export default Link
