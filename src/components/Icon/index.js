import React, {PropTypes, Component} from "react"

import * as icons from "./svg"

export default class Icon extends Component {

    static propTypes = {
        type: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        type: null,
        onClick: () => {},
    }

    render = () => {
        const {
            className,
            type,
            onClick,
        } = this.props

        const icon = icons[type]
        /* eslint-disable no-console */
        if(!icon) console.warn("The icon ",type, " is not available.");
        /* eslint-enable no-console */
        return (
            <span
                className={ className }
                onClick={ onClick }>
                {icon && React.createElement(icon,this.props)}
            </span>
        )
    }
}
