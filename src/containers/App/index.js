import React, { PropTypes, Component } from "react"
import {IntlProvider} from "react-intl"

import Header from "containers/Header"
import Modal from "containers/Modal"
import local from "local"

export default class App extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
        location: PropTypes.object,
    }
    
    render() {
        const {
            children,
            location,
        } = this.props

        const {locale, messages} = local.get(this.props.location.query.lang)
        return <IntlProvider locale={locale}
                             messages={messages}>
                            <div>
                              <Header />
                              {children}
                              <Modal location={location}/>
                          </div>
              </IntlProvider>
    }
}
