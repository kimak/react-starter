import React, { PropTypes, Component } from "react"
import classNames from "classnames"

import styles from "./index.css"

export default class Button extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: null,
        onClick: null,
        disabled: null,
        label: null
    };

    render(){
        const {
            className,
            label,
            disabled
        } = this.props;

        return (
            <button
                disabled={ disabled }
                onClick={ this.props.onClick }
                className={ classNames(styles.root, className, {[styles.defaultColor]: (className==null)})}
             >{ label }</button>
        )
    }
}
