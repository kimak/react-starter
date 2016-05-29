import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import styles from "./index.css"

import { getLists } from "reducers/lists"

@connect(
    (state) => ({
        lists: state.lists
    }),
    (dispatch) => ({
        getLists : () => dispatch(getLists()),
    })
)
export default class PageHome extends Component {

    static propTypes = {
        getLists: PropTypes.func,
        lists: PropTypes.object,
    }

    static contextTypes = {
        intl: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.getLists()
    }

    render() {

        const { lists } = this.props

        return (
            <div className={styles.root}>
              <span>{this.context.intl.formatMessage({id:"app.greeting"},{name: "React"})}</span>
              {
                lists.loading &&
                <span>loading</span>
              }
              <ul>
              {
                lists.data &&
                lists.data.map((element, index) => {
                    return <li key={index}>{element.title}</li>
                })
              }
              </ul>
              {
                lists.error &&
                <span>Error</span>
              }
            </div>
        )
    }
}
