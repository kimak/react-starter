import React, { PropTypes, Component } from "react"

import styles from "./index.css"

export default class Layout extends Component {

    static propTypes = {
        children : PropTypes.element.isRequired,
    }

    render() {
        const {
            children
        } = this.props

        return (<div className={styles.root}>
                <div className={styles.content}>{children}</div>
              </div>)
    }
}
