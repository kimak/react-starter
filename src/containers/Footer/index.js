import React, { Component } from "react"

import styles from "./index.css"

export default class Footer extends Component {

    /*
      code for changing route query with lang parameter

    static propTypes = {
        location: PropTypes.object.isRequired,
    }

    static contextTypes = {
        intl: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired,
    }

    onChangeLang(){
        this.context.router.replace({
            pathname: this.props.location.pathname,
            query:{lang:"fr"},//en
        });
    }*/
    render() {

        return (
            <div className={styles.root}>
                Hello Footer
            </div>
        )
    }
}
