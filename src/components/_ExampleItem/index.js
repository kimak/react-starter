// External
import React, { PropTypes, Component } from "react"

export default class _ExampleItem extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        content : PropTypes.string.isRequired,
        author : PropTypes.string
    }

    static defaultProps = {
        author : "John Doe"
    }

    render(){

        const {
            title,
            content,
            author
        } = this.props

        return (
            <div>
                <h2>{ title } by { author }</h2>
                <p>{ content }</p>
            </div>
        )
    }
}
