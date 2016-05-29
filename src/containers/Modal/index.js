import React, { PropTypes, Component } from "react"
import ReactModal from "react-modal"
import modals from "consts/modals"

import CloseButton from "components/CloseButton"

import styles from "./index.css"

export default class Modal extends Component {

    static propTypes = {
        location: PropTypes.object
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    closeModal = () =>{
        const query = this.props.location.query
        delete query.modal;

        this.context.router.push({
            pathname: this.props.location.pathname,
            query,
        });
    }

    render() {
        const modal = modals.getModal(this.props.location.query.modal)
        const modalIsOpen = modal!=null

        return <ReactModal
                isOpen={modalIsOpen}
                className={styles.modal}
                overlayClassName={styles.modalOverlay}
                onRequestClose={this.closeModal}>
                  <CloseButton className={styles.closeButton}
                               onClick={this.closeModal} />
                  {modal && React.createElement(modal)}
              </ReactModal>
    }
}
