import React, { PropTypes, Component } from "react"
import classNames from "classnames"

import Icon from "components/Icon"

import styles from "./index.css"

export default class CloseButton extends Component {

    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: null,
        onClick: null,
    };

    render(){
        const {
            className,
            onClick,
        } = this.props;

        return (
            <a
                onClick={ onClick }
                className={ classNames(styles.root, className)}
             ><Icon className={styles.icon} type="close"/></a>
        )
    }
}
