// External
import React, { PropTypes, Component } from "react"
import { connect } from "react-redux"

// Actions
import { addExampleWithLimit } from "actions/_example"

// Containers & Components
import ExampleItem from "components/_ExampleItem"

// Managers & Helpers
// import BroadcastHelper from "helpers/Broadcast"

// Selectors
import selectExampleList from "selectors/exampleList"

// consts and style
//import styles from "./index.css"

@connect(
    (state) => ({
        exampleList : selectExampleList(state)
    }),
    (dispatch) => ({
        addExample : () => dispatch(addExampleWithLimit("Test", "This is a test"))
    })
)
export default class _ExampleList extends Component {

    static propTypes = {
        exampleList : PropTypes.object.isRequired,
        addExample : PropTypes.func.isRequired
    }

    render() {

        const {
            exampleList,
            addExample
        } = this.props

        return (
            <div>
                {
                    exampleList.isLoading &&
                    <div>Loading ... Please wait</div>
                }
                {
                    exampleList.data &&
                    <div>
                        {
                            exampleList.data.map((example, index) => {
                                return <ExampleItem
                                            key={ index }
                                            title={ example.title }
                                            content={ example.content }
                                            author={ example.author }/>
                            })
                        }
                    </div>
                }
                { /* Following button should be a component */ }
                <button onClick={ addExample }>Add an example with title Test and a message This is a test (Max : 5)</button>
            </div>
        )
    }
}
