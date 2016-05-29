import React, { PropTypes, Component } from "react"
import classNames from "classnames"

import styles from "./index.css"

export default class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func,
        name: PropTypes.string,
        inputRef: PropTypes.string,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool,
        autoCorrect: PropTypes.string,
        autoCapitalize: PropTypes.string,
        autoComplete: PropTypes.string,
        editable: PropTypes.bool,
        value: PropTypes.string
    }

    static defaultProps = {
        type: "text",
        className: null,
        onChange: null,
        name: null,
        inputRef: null,
        placeholder: null,
        autoFocus: false,
        autoCorrect: "off",
        autoCapitalize: "off",
        autoComplete: "off",
        editable: true,
        value: ""
    }

    state = { value: this.props.value }

    onChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render(){

        const {
            className,
            type,
            inputRef,
            name,
            autoFocus,
            autoCorrect,
            autoComplete,
            autoCapitalize,
            placeholder
        } = this.props

        return (
            <input
                type={ type }
                name={ name }
                ref={ inputRef }
                placeholder={ placeholder }
                autoCorrect={ autoCorrect }
                autoComplete={ autoComplete }
                autoCapitalize={ autoCapitalize }
                autoFocus={ autoFocus }
                onChange={ this.onChange }
                value={ this.state.value }
                className={ classNames(styles.root, className) }
             />
        )
    }
}
