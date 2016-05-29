import React, { Component, PropTypes } from "react"

import styles from "./index.css"

import Icon from "components/Icon"

export default class Header extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    openModal = ()=>{
        this.context.router.push({
            query: {modal:"test"}
        })
    }

    render() {

        return (
            <div className={styles.root}>
              <nav className={styles.nav}>
                  <Icon onClick={this.openModal} className={styles.icon} type="account"/>
              </nav>
            </div>
        )
    }
}
